import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {AddOrderComponent} from "@app/shell/cabinet/orders/add-order/add-order.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {ValidationModule} from "@app/shared/components/validation/validation.module";
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {FilesUploadModule} from "@app/shared/components/files-upload/files-upload.module";
import { SharedModule } from "@app/shared/shared.module";

@NgModule({
  declarations: [AddOrderComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    ValidationModule,
    FlexModule,
    MatButtonModule,
    FilesUploadModule,
    SharedModule
  ]
})
export class AddOrderModule { }
