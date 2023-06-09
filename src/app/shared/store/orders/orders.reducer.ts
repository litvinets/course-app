import * as fromActions from './orders.actions';
import { Order } from '@app/shared/store/orders/orders.models';

export interface OrdersState {
  entity: Order;
  entities: Order[];
  isLoading: boolean;
  error: string;
}

const initialState: OrdersState = {
  entity: null,
  entities: null,
  isLoading: null,
  error: null,
};

export function reducer(
  state: OrdersState = initialState,
  action: fromActions.All
): OrdersState {
  switch (action.type) {
    //CreateOrder

    case fromActions.Types.CREATE_ORDER: {
      return {...state, isLoading: true, error: null};
    }
    case fromActions.Types.CREATE_ORDER_SUCCESS: {
      return {...state, entity: action.order, isLoading: false};
    }
    case fromActions.Types.CREATE_ORDER_FAIL: {
      return {...state, error: action.error, isLoading: false};
    }

    //UpdateOrder
    case fromActions.Types.UPDATE_ORDER: {
      return {...state, isLoading: true};
    }

    case fromActions.Types.UPDATE_ORDER_SUCCESS: {
      return {...state, entity: action.order, isLoading: false, error: null};
    }

    case fromActions.Types.UPDATE_ORDER_FAIL: {
      return {...state, error: action.error, isLoading: false};
    }

    //ReadOrder
    case fromActions.Types.READ_ORDERS: {
      return {...state, isLoading: true, error: null};
    }
    case fromActions.Types.READ_ORDERS_SUCCESS: {
      return {...state, entities: action.orders, isLoading: false};
    }
    case fromActions.Types.READ_ORDERS_FAIL: {
      return {...state, error: action.error, isLoading: false};
    }

    //DeleteOrder
    case fromActions.Types.READ_ORDERS: {
      return {...state, isLoading: true, error: null};
    }
    case fromActions.Types.READ_ORDERS_SUCCESS: {
      return {...state, isLoading: false};
    }
    case fromActions.Types.READ_ORDERS_FAIL: {
      return {...state, error: action.error, isLoading: false};
    }

    default: {
      return {...state};
    }
  }
}