import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOrdersListComponent } from "@app/shell/cabinet/orders/admin-orders-list/admin-orders-list.component";
import { UserOrdersComponent } from "@app/shell/cabinet/orders/user-orders/user-orders.component";
import { IsAdminGuard } from "@app/shell/cabinet/orders/is-admin.guard";

const routes: Routes = [
  {
    path: 'user-orders',
    component: UserOrdersComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {
}
