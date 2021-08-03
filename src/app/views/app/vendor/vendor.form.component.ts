import { Component, OnInit } from "@angular/core";

@Component({
  selector: "vendor-form",
  templateUrl: "./vendor.form.component.html",
})
export class VendorFormComponent implements OnInit {
  currentForm=1;
  constructor() {    
  }
  ngOnInit() {
  }
  Action(event)
  {
    debugger;
    switch (event) {
      case "Next":
        this.currentForm++;
        break;
      case "Skip":
        this.currentForm++;
        break;
      case "Back":
        this.currentForm--;
        break;
    }
  }
}
