import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {HeaderComponent} from "@app/header/header.component";
import {FlexModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FlexModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {
}
