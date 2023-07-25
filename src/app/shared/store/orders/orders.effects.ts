import * as fromActions from './orders.actions';
import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction, } from '@angular/fire/compat/firestore';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, finalize, from, map, Observable, of, switchMap, take } from 'rxjs';
import { Order, OrderStatus } from '@app/shared/store/orders/orders.models';
import { NotificationsService } from '@app/shared/services';
import { FirebaseCollections } from '@app/shared/constants/firebase-collections';
import { documentToItem } from '@app/shared/utils/documentToItem';
import { Location } from '@angular/common';
import firebase from 'firebase/compat';
import { ARCHIVE_ORDER_STATUSES } from '@app/shared';

type Action = fromActions.All;

@Injectable()
export class OrdersEffects {
  constructor(private actions: Actions,
              private afs: AngularFirestore,
              private notificationsService: NotificationsService,
              private location: Location) {
  }

  createOrder$: Observable<Action> = createEffect(() => {
    return this.actions.pipe(
      ofType(fromActions.Types.CREATE_ORDER),
      map((action: fromActions.CreateOrder) => action.order),
      switchMap((order: Order) =>
        from(this.afs.collection(FirebaseCollections.ORDERS).add(order)).pipe(
          map(() => {
            this.notificationsService.onSuccess('Замовлення успішно додано!');
            return new fromActions.CreateOrderSuccess(order);
          }),
          catchError((error) => {
            this.notificationsService.onError(error);
            return of(new fromActions.CreateOrderFail(error));
          }),
          finalize(() => this.location.back())
        )
      )
    );
  });

  updateOrder$: Observable<Action> = createEffect(() => {
    return this.actions.pipe(
      ofType(fromActions.Types.UPDATE_ORDER),
      map((action: fromActions.UpdateOrder) => [action.order, action.statuses]),
      switchMap(([order, statuses]: [Order, OrderStatus[]]) => {
          return from(this.afs.collection(FirebaseCollections.ORDERS).doc(order.id).set(order)).pipe(
            map(() => {
              new fromActions.UpdateOrderSuccess(order);
              return new fromActions.ReadOrders(statuses);
            }),
            catchError((error) => of(new fromActions.UpdateOrderFail(error)))
          );
        }
      )
    );
  });

  read$: Observable<Action> = createEffect(() => {
    return this.actions.pipe(
      ofType(fromActions.Types.READ_ORDERS),
      map((action: fromActions.ReadOrders) => action),
      switchMap((action: fromActions.ReadOrders) => {
        return this.afs
          .collection(FirebaseCollections.ORDERS, (
              (query: firebase.firestore.Query) => {
                let filteredOrders: firebase.firestore.Query<firebase.firestore.DocumentData>;
                if (action.uid) {
                  filteredOrders = query.where('uid', '==', action.uid).where('status', 'in', action.statuses);
                } else {
                  filteredOrders = query.where('status', 'in', action.statuses);
                }
                return filteredOrders;
              }
            )
          )
          .snapshotChanges()
          .pipe(
            take(1),
            map((orders: DocumentChangeAction<Order>[]) =>
              orders.map((item: DocumentChangeAction<Order>) =>
                documentToItem(item)
              )),
            map((orders: Order[]) => new fromActions.ReadOrdersSuccess(orders)),
            catchError((err) => of(new fromActions.ReadOrdersFail(err.message)))
          );
      })
    );
  });


  deleteOrder$: Observable<Action> = createEffect(() => {
    return this.actions.pipe(
      ofType(fromActions.Types.DELETE_ORDER),
      map((action: fromActions.UpdateOrder) => action.order),
      switchMap((order: Order) => {
          return from(this.afs.collection(FirebaseCollections.ORDERS).doc(order.id).delete()).pipe(
            map(() => {
              new fromActions.DeleteOrderSuccess();
              return new fromActions.ReadOrders(ARCHIVE_ORDER_STATUSES);
            }),
            catchError((error) => of(new fromActions.UpdateOrderFail(error)))
          );
        }
      )
    );
  });
}
