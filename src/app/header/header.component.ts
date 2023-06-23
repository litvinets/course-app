import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Constants, Util } from "../shared/index";
import { MatDialog } from "@angular/material/dialog";
import { LoginModalComponent } from "@app/shared/components/authorization/login-modal/login-modal.component";

@Component({
  selector: 'app-header',
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  readonly constants = Constants;
  @Input() isAuthorized: boolean;
  @Output() signOut = new EventEmitter<void>();


  constructor(private dialog: MatDialog) {
  }

  /*Detects device and opens map*/
  mapLink(): void {
    Util.mapLink();
  }

  onSignIn(): void {
    this.dialog.open(LoginModalComponent);
  }
}
