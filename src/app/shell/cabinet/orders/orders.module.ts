import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { ActiveOrdersComponent } from './active-orders/active-orders.component';
import { ArchiveOrdersComponent } from './archive-orders/archive-orders.component';
import { OrderItemComponent } from './order-item/order-item.component';


@NgModule({
  declarations: [
    ActiveOrdersComponent,
    ArchiveOrdersComponent,
    OrderItemComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
