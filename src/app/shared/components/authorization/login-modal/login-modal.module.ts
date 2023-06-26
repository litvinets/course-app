import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginModalComponent } from "./login-modal.component";
import { MatButtonModule } from "@angular/material/button";
import { FlexModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { RouterModule } from "@angular/router";
import { EmailConfirmationComponent } from "@app/shared/components/authorization/login-modal/email-confirmation/email-confirmation.component";
import { ValidationModule } from "@app/shared/components/validation/validation.module";

@NgModule({
  declarations: [LoginModalComponent, EmailConfirmationComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
    RouterModule,
    ValidationModule,
  ],
  exports: [LoginModalComponent, EmailConfirmationComponent],
})
export class LoginModalModule {}
