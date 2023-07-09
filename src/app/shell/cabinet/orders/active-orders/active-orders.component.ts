import { Component, OnInit } from '@angular/core';
import * as fromOrders from '@app/shared/store/orders';
import { Order, OrderStatus } from '@app/shared/store/orders';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ACTIVE_ORDER_STATUSES } from '@app/shared';

@Component({
  selector: 'app-active-orders',
  templateUrl: './active-orders.component.html',
  styleUrls: ['./active-orders.component.scss']
})
export class ActiveOrdersComponent implements OnInit {
  orders$: Observable<Order[]>;

  private readonly activeOrderStatuses: OrderStatus [] = ACTIVE_ORDER_STATUSES;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new fromOrders.ReadOrders(this.activeOrderStatuses));
    this.orders$ = this.store.pipe(select(fromOrders.getOrders));
  }

  onOrderUpdate(order: Order): void {
    this.store.dispatch(new fromOrders.UpdateOrder(order, this.activeOrderStatuses));
  }

  onOrderDelete(): void {

  }
}
