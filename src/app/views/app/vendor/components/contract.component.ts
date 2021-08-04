import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Contract } from "src/app/models/vendor.model";

@Component({
  selector: "contract",
  templateUrl: "./contract.component.html",
})
export class ContractComponent implements OnInit {
  @Output() GetAction = new EventEmitter();
  @Input() inputModel: Contract;
  model: Contract = {
    ClientNO:"",
    ContractNo:"",
    Email:"",
    ExpireDate:undefined,
    StartDate:undefined,
    RenewalDate:undefined,
    RenewalExpireDate:undefined,
    WebSite:""
  };
  constructor() {}
  ngOnInit() {}
  Action(event: any) {
    let data = { event: event };
    this.GetAction.emit(data);
  }
}
