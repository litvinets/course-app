import { ActionReducerMap } from '@ngrx/store';
import * as fromCatalog from './catalog';
import * as fromUser from './user';
import * as fromOrders from './orders';

export interface State {
  catalog: fromCatalog.CatalogState;
  user: fromUser.UserState,
  orders: fromOrders.OrdersState
}

export const reducers: ActionReducerMap<State> = {
  catalog: fromCatalog.reducer,
  user: fromUser.reducer,
  orders: fromOrders.reducer
};

export const effects = [fromCatalog.CatalogEffects, fromUser.UserEffects, fromOrders.OrdersEffects];
