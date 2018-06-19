import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { Angular4PaystackModule } from "angular4-paystack";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { SubscriptionComponent } from "./subscription/subscription.component";
import { LoginComponent } from "./login/login.component";
import { SectionsComponent } from "./sections/sections.component";
import { environment } from "../environments/environment";
import { AuthService } from "./services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SubscriptionComponent,
    LoginComponent,
    SectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    Angular4PaystackModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
