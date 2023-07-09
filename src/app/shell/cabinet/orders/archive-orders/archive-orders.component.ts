import { Component, OnInit } from '@angular/core';
import * as fromOrders from '@app/shared/store/orders';
import { Order, OrderStatus } from '@app/shared/store/orders';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ARCHIVE_ORDER_STATUSES } from '@app/shared';

@Component({
  selector: 'app-archive-orders',
  templateUrl: './archive-orders.component.html',
  styleUrls: ['./archive-orders.component.scss']
})
export class ArchiveOrdersComponent implements OnInit {
  orders$: Observable<Order[]>;

  private readonly activeOrderStatuses: OrderStatus [] = ARCHIVE_ORDER_STATUSES;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new fromOrders.ReadOrders(this.activeOrderStatuses));
    this.orders$ = this.store.pipe(select(fromOrders.getOrders));
  }

  onOrderUpdate(order: Order): void {
    this.store.dispatch(new fromOrders.UpdateOrder(order, this.activeOrderStatuses));
  }

  onOrderDelete(order: Order): void {
    this.store.dispatch(new fromOrders.DeleteOrder(order));

  }
}
