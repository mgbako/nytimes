import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase";

@Component({
  selector: "ny-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  user;

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => (this.user = user));
  }

  ngOnInit() {}

  logout() {
    this.afAuth.auth.signOut();
  }
}
