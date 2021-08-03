import { Component, OnInit } from "@angular/core";
import { Vendor } from "src/app/models/vendor.model";

@Component({
  selector: "consumer",
  templateUrl: "./consumer.component.html",
})
export class ConsumerComponent implements OnInit {
  constructor() {}
  model: Vendor ;
  ngOnInit() {
  }
}
