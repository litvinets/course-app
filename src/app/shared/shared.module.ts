import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalModule } from '@app/shared/components/authorization/login-modal/login-modal.module';
import { ValidationComponent } from './components/validation/validation.component';
import { EmailConfirmationComponent } from './components/authorization/email-confirmation/email-confirmation.component';

@NgModule({
  declarations: [ValidationComponent, EmailConfirmationComponent],
  exports: [ValidationComponent],
  imports: [CommonModule, LoginModalModule],
})
export class SharedModule {}
