import * as fromActions from './orders.actions';
import { Injectable } from '@angular/core';
import {
  AngularFirestore, DocumentChangeAction,
} from '@angular/fire/compat/firestore';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, map, Observable, of, switchMap, take, zip } from 'rxjs';
import { Order, OrderRequest } from '@app/shared/store/orders/orders.models';
import { NotificationsService } from '@app/shared/services';
import { FirebaseCollections } from '@app/shared/constants/firebase-collections';
import { CatalogItemModel } from '@app/shared';
import { Catalog } from '@app/shared/store/catalog';
import { documentToItem } from '@app/shared/utils/documentToItem';

type Action = fromActions.All;

@Injectable()
export class OrdersEffects {
  constructor(private actions: Actions, private afs: AngularFirestore, private notificationsService: NotificationsService
  ) {
  }

  createOrder$: Observable<Action> = createEffect(() => {
    return this.actions.pipe(
      ofType(fromActions.Types.CREATE_ORDER),
      map((action: fromActions.CreateOrder) => action.order),
      switchMap((order: OrderRequest) =>
        from(this.afs.collection('orders').add(order)).pipe(
          map(() => {
            this.notificationsService.onSuccess('Замовлення успішно додано!');
            return new fromActions.CreateOrderSuccess(order);
          }),
          catchError((error) => {
            this.notificationsService.onError(error);
            return of(new fromActions.CreateOrderFail(error));
          })
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