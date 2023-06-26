import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireStorageModule } from "@angular/fire/compat/storage";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { HeaderModule } from "@app/header/header.module";
import { ShellModule } from "@app/shell/shell.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexModule } from "@angular/flex-layout";
import { FooterComponent } from "@app/footer/footer.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { effects, reducers } from "@app/shared/store";
import { SharedModule } from '@app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NotificationsModule} from "@app/shared/services";

const StoreDevtools = !environment.production
  ? StoreDevtoolsModule.instrument({ maxAge: 50 })
  : [];

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase.config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    HeaderModule,
    ShellModule,
    FlexModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    StoreDevtools,
    NotificationsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
