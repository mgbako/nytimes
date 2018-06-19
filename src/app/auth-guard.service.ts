import { Router, CanActivate } from "@angular/router";
import { AuthService } from "./services/auth.service";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    return this.auth.user.map(user => {
      if (user) {
        return true;
      } else {
        this.router.navigate(["/login"]);
        return false;
      }
    });
  }
}
