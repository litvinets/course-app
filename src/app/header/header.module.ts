import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {HeaderComponent} from "@app/header/header.component";
import {FlexModule} from '@angular/flex-layout';
import {AppRoutingModule} from '@app/app-routing.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FlexModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {
}
