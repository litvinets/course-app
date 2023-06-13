import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalModule } from '@app/shared/components/authorization/login-modal/login-modal.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LoginModalModule,
  ]
})
export class SharedModule { }
