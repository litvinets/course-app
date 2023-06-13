import { Component } from "@angular/core";
import { Constants, Util } from '../shared/index';
import { MatDialog } from '@angular/material/dialog';
import { LoginModalComponent } from '@app/shared/components/authorization/login-modal/login-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  readonly constants = Constants;

  constructor(private dialog: MatDialog) {
  }

  /*Detects device and opens map*/
  mapLink(): void {
    Util.mapLink();
  }

  onLogin(): void {
    const dialogRef = this.dialog.open(LoginModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log(result)
      }
    });
  }
}
