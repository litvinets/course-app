import { Component, OnInit } from '@angular/core';
import { debounceTime, Observable, Subject, takeUntil } from "rxjs";
import { Order } from "@app/shared/store/orders";
import { select, Store } from "@ngrx/store";
import { ActivatedRoute, Params } from "@angular/router";
import * as fromOrders from "@app/shared/store/orders";
import { ACTIVE_ORDER_STATUSES, ARCHIVE_ORDER_STATUSES } from "@app/shared";

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent implements OnInit {
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
          this.store.dispatch(new fromOrders.ReadOrders(ACTIVE_ORDER_STATUSES, params['uid']));
          break;
        case 'archive':
          this.store.dispatch(new fromOrders.ReadOrders(ARCHIVE_ORDER_STATUSES, params['uid']));
          break;
        default:
          break;
      }
    });
  }

}
