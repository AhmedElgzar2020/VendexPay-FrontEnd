import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "address",
  templateUrl: "./address.component.html",
})
export class AddressComponent implements OnInit {
  @Output() GetAction = new EventEmitter();
  constructor() {}
  ngOnInit() {}
  Action(event: any) {
    this.GetAction.emit(event);
    /* switch (event) {
      case "Next":
        break;
      case "Skip":
        break;
      case "Back":
        break;
    } */
  }
}
