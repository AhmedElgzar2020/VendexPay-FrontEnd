import { Component, OnInit } from "@angular/core";
import { Vendor } from "src/app/models/vendor.model";

@Component({
  selector: "vendor",
  templateUrl: "./vendor.component.html",
})
export class VendorComponent implements OnInit {
  constructor() {}
  model: Vendor ;
  ngOnInit() {
    
  }
}
