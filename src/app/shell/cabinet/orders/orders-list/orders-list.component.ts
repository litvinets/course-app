import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Order, OrderStatus, OrderStatusUkr } from '@app/shared/store/orders';
import { ACTIVE_ORDER_STATUSES } from '@app/shared';

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

  @Output() orderUpdate = new EventEmitter<Order>();
  @Output() deleteOrder = new EventEmitter<Order>();

  constructor() { }

  onCancel(event: Event, order: Order): void {
    this.updateOrderStatus(event, {...order, status: OrderStatus.Canceled});
  }

  onApprove(event: Event, order: Order): void {
    this.updateOrderStatus(event, {...order, status: OrderStatus.InProgress});

  }

  onComplete(event: Event, order: Order): void {
    this.updateOrderStatus(event, {...order, status: OrderStatus.Completed});

  }

  onOrderDelete(event: Event, order: Order): void {
    event.stopPropagation();
    this.deleteOrder.emit(order)
  }

  private updateOrderStatus(event: Event, order: Order): void {
    event.stopPropagation();
    this.orderUpdate.emit(order)
  }
}
