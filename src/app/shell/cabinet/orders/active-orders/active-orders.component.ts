import { Component, OnInit } from '@angular/core';
import * as fromOrders from '@app/shared/store/orders';
import { select, Store } from '@ngrx/store';
import * as fromCatalog from '@app/shared/store/catalog';
import { Observable } from 'rxjs';
import { Catalog } from '@app/shared/store/catalog';
import { Order, OrderStatusUkr } from '@app/shared/store/orders';

@Component({
  selector: 'app-active-orders',
  templateUrl: './active-orders.component.html',
  styleUrls: ['./active-orders.component.scss']
})
export class ActiveOrdersComponent implements OnInit {
  readonly OrderStatusUkr = OrderStatusUkr;
  orders$: Observable<Order[]>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new fromOrders.ReadOrders());
    this.orders$ = this.store.pipe(select(fromOrders.getOrders));
  }

}
