import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOrdersListComponent } from "@app/shell/cabinet/orders/admin-orders-list/admin-orders-list.component";
import { IsAdminGuard } from "@app/shell/cabinet/orders/is-admin.guard";
const routes: Routes = [
  {
    path: 'orders',
    loadChildren: () =>
      import(
        './orders/orders.module'
        ).then((m) => m.OrdersModule),
  },
  {
    path: 'orders/admin-orders',
    component: AdminOrdersListComponent,
    loadChildren: () =>
      import(
        './orders/admin-orders-list/admin-orders-list.module'
        ).then((m) => m.AdminOrdersListModule),
    canLoad: [IsAdminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CabinetRoutingModule {
}
