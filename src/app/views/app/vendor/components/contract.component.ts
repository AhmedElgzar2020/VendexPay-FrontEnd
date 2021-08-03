import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "contract",
  templateUrl: "./contract.component.html",
})
export class ContractComponent implements OnInit {
  @Output() GetAction = new EventEmitter();
  constructor() {}
  ngOnInit() {}
  Action(event: any) {
    let data = { event: event };
    this.GetAction.emit(data);
  }
}
