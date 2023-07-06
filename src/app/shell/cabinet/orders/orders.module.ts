import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { ActiveOrdersComponent } from './active-orders/active-orders.component';
import { ArchiveOrdersComponent } from './archive-orders/archive-orders.component';
import { OrderItemComponent } from './order-item/order-item.component';
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {ValidationModule} from "@app/shared/components/validation/validation.module";
import {AddOrderModule} from "@app/shell/cabinet/orders/add-order/add-order.module";


@NgModule({
  declarations: [
    ActiveOrdersComponent,
    ArchiveOrdersComponent,
    OrderItemComponent,
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FlexModule,
    MatButtonModule,
    AddOrderModule
  ],
})
export class OrdersModule {}
