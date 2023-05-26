import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CatalogComponent } from "@app/shell/main/catalog/catalog.component";
import { RequirementsComponent } from "@app/shell/main/requirements/requirements.component";
import { PaymentsComponent } from "@app/shell/main/payments/payments.component";

const routes: Routes = [
  { path: "catalog", component: CatalogComponent },
  { path: "requirements", component: RequirementsComponent },
  { path: "payments", component: PaymentsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
