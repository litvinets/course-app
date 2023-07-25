import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersModule } from "@app/shell/cabinet/orders/orders.module";
import { AdminOrdersListComponent } from "@app/shell/cabinet/orders/admin-orders-list/admin-orders-list.component";

@NgModule({
  declarations: [AdminOrdersListComponent],
  imports: [
    CommonModule,
    OrdersModule
  ]
})
export class AdminOrdersListModule { }
