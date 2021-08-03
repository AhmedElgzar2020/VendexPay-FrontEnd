import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Column } from "src/app/models/dataTable.column.model";
import {  Manager } from "src/app/models/vendor.model";

@Component({
  selector: "manager",
  templateUrl: "./manager.component.html",
})
export class ManagerComponent implements OnInit {
  @Output() GetAction = new EventEmitter();
  model: Manager[]=[];
  addModel: Manager = { qId: "", mobile: "", name: "", title: "",vendorId:0 };
  columns: Column[];
  constructor() {}
  ngOnInit() {
    this.columns = [
      { name: "name" },
      { name: "title" },
      { name: "qId" },
      { name: "mobile" },
    ];
  }
  Action(event: any) {
    let data = { event: event, model: this.model,form:4 };
    this.GetAction.emit(data);
  }
  Add() {
    this.model.push(this.addModel);
    this.model= [...this.model];
    this.addModel = { qId: "", mobile: "", name: "", title: "" ,vendorId:0};
  }
}
