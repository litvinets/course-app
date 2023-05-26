import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CatalogComponent } from "@app/shell/main/catalog/catalog.component";
import { RequirementsComponent } from "@app/shell/main/requirements/requirements.component";

const routes: Routes = [
  { path: "catalog", component: CatalogComponent },
  { path: "requirements", component: RequirementsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
