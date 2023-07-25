import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SettingsComponent } from "./settings.component";
import { FlexModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { ValidationModule } from "@app/shared/components/validation/validation.module";
import { SharedModule } from "@app/shared/shared.module";

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    FlexModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    ValidationModule,
    SharedModule
  ],
})
export class SettingModule {}
