import { Component, OnInit } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { Store } from "@ngrx/store";
import * as fromCatalog from "../../../shared/store/catalog";

@Component({
  selector: "app-catalog",
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.scss"],
  providers: [MatExpansionModule],
})
export class CatalogComponent implements OnInit {

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getCatalogData();
  }

  private getCatalogData(): void {
    this.store.dispatch(new fromCatalog.Read());
  }
}
