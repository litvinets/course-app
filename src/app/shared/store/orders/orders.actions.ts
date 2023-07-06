import { Action } from '@ngrx/store';
import { OrderRequest, Order } from '@app/shared/store/orders/orders.models';
import { Catalog } from '@app/shared/store/catalog';

export enum Types {
  CREATE_ORDER = '[Orders] Create: Start',
  CREATE_ORDER_SUCCESS = '[Orders] Create: Success',
  CREATE_ORDER_FAIL = '[Orders] Create: Fail',

  READ_ORDERS = '[Orders] Read: Start',
  READ_ORDERS_SUCCESS = '[Orders] Read: Success',
  READ_ORDERS_FAIL = '[Orders] Read: Fail',
}

//Create Order
export class CreateOrder implements Action {
  readonly type = Types.CREATE_ORDER;

  constructor(public order: OrderRequest) {
  }
}

export class CreateOrderSuccess implements Action {
  readonly type = Types.CREATE_ORDER_SUCCESS;

  constructor(public order: OrderRequest) {
  }
}

export class CreateOrderFail implements Action {
  readonly type = Types.CREATE_ORDER_FAIL;

  constructor(public error: string) {
  }
}

export class ReadOrders implements Action {
  readonly type = Types.READ_ORDERS;

  constructor() {
  }
}

export class ReadOrdersSuccess implements Action {
  readonly type = Types.READ_ORDERS_SUCCESS;

  constructor(public orders: Order[]) {
  }
}

export class ReadOrdersFail implements Action {
  readonly type = Types.READ_ORDERS_FAIL;

  constructor(public error: string) {
  }
}

export type All =
  CreateOrder |
  CreateOrderSuccess |
  CreateOrderFail |
  ReadOrders |
  ReadOrdersSuccess |
  ReadOrdersFail;