import { Action } from '@ngrx/store';
import { Order, OrderStatus } from '@app/shared/store/orders/orders.models';

export enum Types {
  CREATE_ORDER = '[Orders] Create: Start',
  CREATE_ORDER_SUCCESS = '[Orders] Create: Success',
  CREATE_ORDER_FAIL = '[Orders] Create: Fail',

  UPDATE_ORDER = '[Orders] Update: Start',
  UPDATE_ORDER_SUCCESS = '[Orders] Update: Success',
  UPDATE_ORDER_FAIL = '[Orders] Update: Fail',

  READ_ORDERS = '[Orders] Read: Start',
  READ_ORDERS_SUCCESS = '[Orders] Read: Success',
  READ_ORDERS_FAIL = '[Orders] Read: Fail',

  DELETE_ORDER = '[Orders] Delete: Start',
  DELETE_ORDER_SUCCESS = '[Orders] Delete: Success',
  DELETE_ORDER_FAIL = '[Orders] Delete: Fail',
}

//Create Order
export class CreateOrder implements Action {
  readonly type = Types.CREATE_ORDER;

  constructor(public order: Order) {
  }
}

export class CreateOrderSuccess implements Action {
  readonly type = Types.CREATE_ORDER_SUCCESS;

  constructor(public order: Order) {
  }
}

export class CreateOrderFail implements Action {
  readonly type = Types.CREATE_ORDER_FAIL;

  constructor(public error: string) {
  }
}

//Update Order
export class UpdateOrder implements Action {
  readonly type = Types.UPDATE_ORDER;

  constructor(public order: Order, public statuses: OrderStatus[]) {
  }
}

export class UpdateOrderSuccess implements Action {
  readonly type = Types.UPDATE_ORDER_SUCCESS;

  constructor(public order: Order) {
  }
}

export class UpdateOrderFail implements Action {
  readonly type = Types.UPDATE_ORDER_FAIL;

  constructor(public error: string) {
  }
}

//Read Order
export class ReadOrders implements Action {
  readonly type = Types.READ_ORDERS;

  constructor(public statuses: OrderStatus[]) {
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

//Update Order
export class DeleteOrder implements Action {
  readonly type = Types.DELETE_ORDER;

  constructor(public order: Order) {
  }
}

export class DeleteOrderSuccess implements Action {
  readonly type = Types.DELETE_ORDER_SUCCESS;

  constructor() {}
}

export class DeleteOrderFail implements Action {
  readonly type = Types.DELETE_ORDER_FAIL;

  constructor(public error: string) {
  }
}

export type All =
  CreateOrder |
  CreateOrderSuccess |
  CreateOrderFail |
  UpdateOrder |
  UpdateOrderSuccess |
  UpdateOrderFail |
  ReadOrders |
  ReadOrdersSuccess |
  ReadOrdersFail |
  DeleteOrder |
  DeleteOrderSuccess |
  DeleteOrderFail;