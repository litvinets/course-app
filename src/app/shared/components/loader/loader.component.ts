import { Component, OnInit } from '@angular/core';
import * as fromCatalog from '../../../shared/store/catalog';
import * as fromUser from '../../../shared/store/user';
import * as fromOrders from '../../../shared/store/orders';
import { Store } from '@ngrx/store';
import { combineLatest, distinctUntilChanged, map, Observable } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  isLoadingProgressBar$: Observable<boolean>;
  isLoadingSpinner$: Observable<boolean>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.isLoadingProgressBar$ = combineLatest([
      this.store.select(fromCatalog.getLoading),
      this.store.select(fromUser.getLoading),
      this.store.select(fromOrders.getLoading),

    ]).pipe(
      distinctUntilChanged(),
      map(
        ([isCatalogLoading, isUserLoading, isOrdersLoading]: [boolean, boolean, boolean]) =>
          isCatalogLoading || isUserLoading || isOrdersLoading
      )
    );
  }
}
