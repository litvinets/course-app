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
import { FooterComponent } from "./footer/footer.component";
import { FlexModule } from "@angular/flex-layout";

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
