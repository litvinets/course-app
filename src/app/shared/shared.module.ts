import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalModule } from '@app/shared/components/authorization/login-modal/login-modal.module';
import { ValidationComponent } from './components/validation/validation.component';

@NgModule({
  declarations: [ValidationComponent],
  exports: [ValidationComponent],
  imports: [CommonModule, LoginModalModule],
})
export class SharedModule {}
