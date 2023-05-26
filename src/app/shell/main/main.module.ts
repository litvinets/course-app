import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "../main/main.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { RequirementsComponent } from "./requirements/requirements.component";
import { MatTabsModule } from "@angular/material/tabs";
import { FlexModule } from "@angular/flex-layout";
import { PaymentsComponent } from "./payments/payments.component";
import { MatListModule } from "@angular/material/list";

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
    MatListModule,
  ],
})
export class MainModule {}
