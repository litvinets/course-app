import * as fromActions from './orders.actions';
import { Injectable } from '@angular/core';
import {
  AngularFirestore, DocumentChangeAction,
} from '@angular/fire/compat/firestore';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, finalize, from, map, Observable, of, switchMap, take } from 'rxjs';
import { Order } from '@app/shared/store/orders/orders.models';
import { NotificationsService } from '@app/shared/services';
import { FirebaseCollections } from '@app/shared/constants/firebase-collections';
import { documentToItem } from '@app/shared/utils/documentToItem';
import { Location } from '@angular/common';

type Action = fromActions.All;

@Injectable()
export class OrdersEffects {
  constructor(private actions: Actions, private afs: AngularFirestore, private notificationsService: NotificationsService,
              private location: Location
  ) {
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

  read$: Observable<Action> = createEffect(() => {
    return this.actions.pipe(
      ofType(fromActions.Types.READ_ORDERS),
      switchMap(() => {
        return this.afs
          .collection(FirebaseCollections.ORDERS)
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
}
