import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// import { AuthGuard } from "./auth-guard.service";

import { SubscriptionComponent } from "./subscription/subscription.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { SectionsComponent } from "./sections/sections.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },

  { path: "login", component: LoginComponent },
  {
    path: "",
    component: SectionsComponent,
    children: [
      {
        path: "home",
        component: HomeComponent /* canActivate: [AuthGuard] */
      },
      { path: "subscribe", component: SubscriptionComponent }
    ]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { enableTracing: true })]
})
export class AppRoutingModule {}
