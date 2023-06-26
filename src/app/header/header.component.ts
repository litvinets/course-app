import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { Constants, Util } from "../shared/index";
import { MatDialog } from "@angular/material/dialog";
import { LoginModalComponent } from "@app/shared/components/authorization/login-modal/login-modal.component";
import { Actions, Store } from '@ngxs/store';
import * as fromUser from "../shared/store/user";
import {Observable} from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  readonly constants = Constants;

  @Input() isAuthorized: boolean;

  @Output() signOut = new EventEmitter<void>();

  isUserLoading$: Observable<boolean>;
  user$: Observable<fromUser.User>;

  constructor(private dialog: MatDialog, private store: Store,     private actions$: Actions) {}

  ngOnInit(): void {
    this.isUserLoading$ = this.store.select(fromUser.getLoading);
    this.user$ = this.store.select(fromUser.getUser);
  }

  /*Detects device and opens map*/
  mapLink(): void {
    Util.mapLink();
  }

  onSignIn(): void {
    this.dialog.open(LoginModalComponent);
  }
}
