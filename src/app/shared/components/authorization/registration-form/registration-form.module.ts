import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { FlexModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { RegistrationFormComponent } from "@app/shared/components/authorization/registration-form/registration-form.component";
import { SharedModule } from "@app/shared/shared.module";
import { ValidationModule } from "@app/shared/components/validation/validation.module";

@NgModule({
  declarations: [RegistrationFormComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    SharedModule,
    ValidationModule,
  ],
  exports: [RegistrationFormComponent],
})
export class RegistrationFormModule {}
