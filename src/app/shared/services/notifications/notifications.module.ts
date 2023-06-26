import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotificationsService } from "./notifications.service";
import { NotificationComponent } from "./components/notification/notification.component";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  declarations: [NotificationComponent],
  imports: [CommonModule, MatSnackBarModule],
})
export class NotificationsModule {
  static forRoot(): ModuleWithProviders<NotificationsModule> {
    return {
      ngModule: NotificationsModule,
      providers: [NotificationsService],
    };
  }
}
