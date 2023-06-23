import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import * as fromCatalog from "./shared/store/catalog";
import * as fromUser from "./shared/store/user";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  isAuthorized$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new fromUser.Init());
    this.store.dispatch(new fromCatalog.Read());
    this.isAuthorized$ = this.store.pipe(select(fromUser.getIsAuthorized));
  }

  onSignIn(): void {}

  onSignOut(): void {
    this.store.dispatch(new fromUser.SignOut());
  }
}
