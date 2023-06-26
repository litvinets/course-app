import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CabinetRoutingModule } from "./cabinet-routing.module";
import {CabinetComponent} from "@app/shell/cabinet/cabinet.component";
import {MatDividerModule} from "@angular/material/divider";
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  declarations: [CabinetComponent],
  imports: [
    CommonModule,
    CabinetRoutingModule,
    MatDividerModule,
    MatTabsModule,
  ],
})
export class CabinetModule {}
