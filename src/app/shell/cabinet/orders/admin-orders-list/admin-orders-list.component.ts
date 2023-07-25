import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import * as fromOrders from "@app/shared/store/orders";
import { debounceTime, Observable, Subject, takeUntil } from "rxjs";
import { ActivatedRoute, Params } from "@angular/router";
import { ACTIVE_ORDER_STATUSES, ARCHIVE_ORDER_STATUSES } from "@app/shared";
import { Order, OrderStatus } from "@app/shared/store/orders";
import { UserProfile } from "@app/shared/models";

@Component({
  selector: 'app-admin-orders-list',
  templateUrl: './admin-orders-list.component.html',
  styleUrls: ['./admin-orders-list.component.scss']
})
export class AdminOrdersListComponent implements OnInit {
  orders$: Observable<Order[]>;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private store: Store,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.orders$ = this.store.pipe(select(fromOrders.getOrders));
    this.setRouteSubscription();
  }

  private setRouteSubscription(): void {
    this.route.queryParams.pipe(
      takeUntil(this.destroy$),
      debounceTime(200)
    ).subscribe((params: Params) => {
      switch (params['page']) {
        case 'active':
          this.store.dispatch(new fromOrders.ReadOrders(ACTIVE_ORDER_STATUSES));
          break;
        case 'archive':
          this.store.dispatch(new fromOrders.ReadOrders(ARCHIVE_ORDER_STATUSES));
          break;
        default:
          break;
      }
    });
  }
}
