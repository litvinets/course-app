import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {LoaderComponent} from "@app/shared/components/loader/loader.component";
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  exports: [
      LoaderComponent
  ]
})
export class LoaderModule { }
