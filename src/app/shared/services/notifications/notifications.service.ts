import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { NotificationComponent } from "@app/shared/services/notifications/components";

@Injectable()
export class NotificationsService {
  constructor(private snackBar: MatSnackBar) {}

  onError(message: string): void {
    this.snackBar.openFromComponent(NotificationComponent, {
      duration: 3000,
      data: { message },
      panelClass: ["mat-snackbar_error"],
    });
  }

  onSuccess(message: string): void {
    this.snackBar.openFromComponent(NotificationComponent, {
      duration: 3000,
      data: { message },
      panelClass: ["mat-snackbar_success"],
    });
  }
}
