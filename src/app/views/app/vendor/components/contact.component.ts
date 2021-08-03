import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "contact",
  templateUrl: "./contact.component.html",
})
export class ContactComponent implements OnInit {
  @Output() GetAction = new EventEmitter();
  constructor() {}
  ngOnInit() {}
  Action(event: any) {
    this.GetAction.emit(event);
  }
}
