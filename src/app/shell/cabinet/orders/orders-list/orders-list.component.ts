import { Component, Input } from '@angular/core';
import { Order, OrderStatus, OrderStatusUkr } from '@app/shared/store/orders';
import { ACTIVE_ORDER_STATUSES } from '@app/shared';
import { Store } from "@ngrx/store";
import * as fromOrders from "@app/shared/store/orders";

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent {
  @Input() orders: Order[];

  readonly OrderStatusUkr = OrderStatusUkr;
  readonly OrderStatus = OrderStatus;
  readonly activeOrderStatuses: OrderStatus [] = ACTIVE_ORDER_STATUSES;

  constructor(private store: Store) {}

  onOrderDelete(event: Event, order: Order): void {
    event.stopPropagation();
    this.store.dispatch(new fromOrders.DeleteOrder(order));
  }

  onUpdateOrderStatus(event: Event, order: Order, orderStatus: OrderStatus): void {
    event.stopPropagation();
    this.store.dispatch(new fromOrders.UpdateOrder({
      ...order,
      status: orderStatus
    }, this.activeOrderStatuses));
  }
}
