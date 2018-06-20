import { Component, OnInit } from "@angular/core";
import { environment } from "../../environments/environment";

@Component({
  selector: "ny-subscription",
  templateUrl: "./subscription.component.html",
  styleUrls: ["./subscription.component.scss"]
})
export class SubscriptionComponent implements OnInit {
  pk_key;
  constructor() {
    this.pk_key = environment.paystack_public_key;
  }

  ngOnInit() {}

  done(event) {
    console.log(event);
  }

  paymentCancel() {}
}
