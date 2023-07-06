import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveOrdersComponent } from '@app/shell/cabinet/orders/active-orders/active-orders.component';

const routes: Routes = [
  {
    path: 'active',
    component: ActiveOrdersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {
}
