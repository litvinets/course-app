import { Component, OnInit } from '@angular/core';
import * as fromOrders from '@app/shared/store/orders';
import { select, Store } from '@ngrx/store';
import * as fromCatalog from '@app/shared/store/catalog';
import { Observable } from 'rxjs';
import { Catalog } from '@app/shared/store/catalog';
import { Order } from '@app/shared/store/orders';

@Component({
  selector: 'app-active-orders',
  templateUrl: './active-orders.component.html',
  styleUrls: ['./active-orders.component.scss']
})
export class ActiveOrdersComponent implements OnInit {
  orders$: Observable<Order[]>;

  orders = [
    {
      title: 'order title 1',
      details: 'details 1',
      summary: 'summary 1'
    },
    {
      title: 'order title 2',
      details: 'details 2',
      summary: 'summary 2'
    }
  ];

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new fromOrders.ReadOrders());
    this.orders$ = this.store.pipe(select(fromOrders.getOrders));
  }

}
