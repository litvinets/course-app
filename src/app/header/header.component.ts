import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { Constants, Util } from "../shared/index";
import { MatDialog } from "@angular/material/dialog";
import { LoginModalComponent } from "@app/shared/components/authorization/login-modal/login-modal.component";
import * as fromUser from "../shared/store/user";
import { UserProfile } from "../shared/store/user";
import { Observable, Subject, takeUntil } from "rxjs";
import { Store } from "@ngrx/store";
import { Role } from "@app/shared/enums";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  readonly constants = Constants;

  @Input() isAuthorized: boolean;

  @Output() signOut = new EventEmitter<void>();

  isUserLoading$: Observable<boolean>;
  user: UserProfile;
  destroy$: Subject<boolean> = new Subject<boolean>();

  get orderLink(): string {
    return `/cabinet/orders/${this.user.role === Role.Admin ? 'admin-orders' : 'user-orders'}`;
  }

  constructor(private dialog: MatDialog, private store: Store) {
  }

  ngOnInit(): void {
    this.isUserLoading$ = this.store.select(fromUser.getLoading);
    this.store
      .select(fromUser.getUser)
      .pipe(takeUntil(this.destroy$))
      .subscribe((user: UserProfile) => this.user = user);
  }

  /*Detects device and opens map*/
  mapLink(): void {
    Util.mapLink();
  }

  onSignIn(): void {
    this.dialog.open(LoginModalComponent);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
