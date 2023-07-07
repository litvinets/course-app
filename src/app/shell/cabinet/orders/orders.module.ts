import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { ActiveOrdersComponent } from './active-orders/active-orders.component';
import { ArchiveOrdersComponent } from './archive-orders/archive-orders.component';
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {AddOrderModule} from "@app/shell/cabinet/orders/add-order/add-order.module";
import {MatExpansionModule} from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    ActiveOrdersComponent,
    ArchiveOrdersComponent,
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FlexModule,
    MatButtonModule,
    AddOrderModule,
    MatExpansionModule,
    MatDividerModule
  ],
})
export class OrdersModule {}
