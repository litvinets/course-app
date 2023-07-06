import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CabinetRoutingModule } from "./cabinet-routing.module";
import {CabinetComponent} from "@app/shell/cabinet/cabinet.component";
import {MatDividerModule} from "@angular/material/divider";
import {MatTabsModule} from "@angular/material/tabs";
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [CabinetComponent],
  imports: [
    CommonModule,
    CabinetRoutingModule,
    MatDividerModule,
    MatTabsModule,
    FlexModule,
    MatButtonModule,
  ],
})
export class CabinetModule {}
