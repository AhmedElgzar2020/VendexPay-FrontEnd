import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "manager",
  templateUrl: "./manager.component.html",
})
export class ManagerComponent implements OnInit {
  @Output() GetAction = new EventEmitter();
  constructor() {}
  ngOnInit() {}
  Action(event: any) {
    this.GetAction.emit(event);
  }
}
