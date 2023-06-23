import { Component, OnInit } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { select, Store } from '@ngrx/store';
import * as fromCatalog from "../../../shared/store/catalog";
import { Catalog } from "../../../shared/store/catalog";
import { Observable } from "rxjs";

@Component({
  selector: "app-catalog",
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.scss"],
  providers: [MatExpansionModule],
})
export class CatalogComponent implements OnInit {
  catalog$: Observable<Catalog>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getCatalogData();
  }

  private getCatalogData(): void {
    this.catalog$ = this.store.pipe(select(fromCatalog.getCatalog));
  }
}
