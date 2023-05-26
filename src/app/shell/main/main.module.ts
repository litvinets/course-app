import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "../main/main.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { RequirementsComponent } from "./requirements/requirements.component";
import { MatTabsModule } from "@angular/material/tabs";
import { FlexModule } from "@angular/flex-layout";
import { PaymentsComponent } from "./payments/payments.component";
import { MatExpansionModule } from "@angular/material/expansion";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    MainComponent,
    CatalogComponent,
    RequirementsComponent,
    PaymentsComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatTabsModule,
    FlexModule,
    MatExpansionModule,
    MatListModule,
    MatDividerModule
  ],
})
export class MainModule {}
