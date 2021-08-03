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
    this.GetAction.emit(event);
  }
}
