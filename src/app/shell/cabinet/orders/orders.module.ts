import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { ActiveOrdersComponent } from './active-orders/active-orders.component';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { AddOrderModule } from '@app/shell/cabinet/orders/add-order/add-order.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { ArchiveOrdersComponent } from '@app/shell/cabinet/orders/archive-orders/archive-orders.component';


@NgModule({
  declarations: [
    ActiveOrdersComponent,
    ArchiveOrdersComponent,
    OrdersListComponent,
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
export class OrdersModule {
}
