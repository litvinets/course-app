import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ValidationComponent } from "@app/shared/components/validation/validation.component";

@NgModule({
  declarations: [ValidationComponent],
  imports: [CommonModule],
  exports: [ValidationComponent],
})
export class ValidationModule {}
