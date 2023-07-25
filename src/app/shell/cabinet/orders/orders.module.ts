import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { AddOrderModule } from '@app/shell/cabinet/orders/add-order/add-order.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { AdminOrdersListComponent } from "./admin-orders-list/admin-orders-list.component";

@NgModule({
  declarations: [
    OrdersListComponent,
    UserOrdersComponent,
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FlexModule,
    MatButtonModule,
    AddOrderModule,
    MatExpansionModule,
    MatDividerModule,
  ], exports: [
    OrdersListComponent
  ]
})
export class OrdersModule {
}
