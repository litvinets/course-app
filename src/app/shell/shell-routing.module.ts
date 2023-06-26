import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "@app/shell/main/main.component";
import { RegistrationFormComponent } from "@app/shared/components/authorization/registration-form/registration-form.component";
import { EmailConfirmationComponent } from "@app/shared/components/authorization/login-modal/email-confirmation/email-confirmation.component";
import {NotFoundPageComponent} from "@app/shell/not-found-page/not-found-page.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    loadChildren: () => import("./main/main.module").then((m) => m.MainModule),
  },
  {
    path: "registration",
    component: RegistrationFormComponent,
    loadChildren: () =>
      import(
        "../shared/components/authorization/registration-form/registration-form.module"
      ).then((m) => m.RegistrationFormModule),
  },
  {
    path: "email-confirmation",
    component: EmailConfirmationComponent,
    loadChildren: () =>
      import(
        "../shared/components/authorization/registration-form/registration-form.module"
      ).then((m) => m.RegistrationFormModule),
  },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
