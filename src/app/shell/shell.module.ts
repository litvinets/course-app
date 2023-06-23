import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellRoutingModule } from './shell-routing.module';
import { ShellComponent } from '../shell/shell.component';
import {FlexModule} from '@angular/flex-layout';
import { NotFoundPageComponent } from '@app/shell/not-found-page/not-found-page.component';


@NgModule({
  declarations: [ShellComponent, NotFoundPageComponent],
  imports: [CommonModule, ShellRoutingModule, FlexModule],
  exports: [ShellComponent],
})
export class ShellModule {}
