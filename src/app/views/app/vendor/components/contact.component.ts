import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Column } from "src/app/models/dataTable.column.model";
import { Contact } from "src/app/models/vendor.model";

@Component({
  selector: "contact",
  templateUrl: "./contact.component.html",
})
export class ContactComponent implements OnInit {
  @Output() GetAction = new EventEmitter();
  model: Contact[]=[];
  addModel: Contact = { email: "", mobile: "", name: "", title: "",vendorId:0 };
  columns: Column[];
  constructor() {}
  ngOnInit() {
    this.columns = [
      { name: "name" },
      { name: "title" },
      { name: "email" },
      { name: "mobile" },
    ];
  }
  Action(event: any) {
    let data = { event: event, model: this.model,form:3 };
    this.GetAction.emit(data);
  }
  Add() {
    this.model.push(this.addModel);
    this.model= [...this.model];
    this.addModel = { email: "", mobile: "", name: "", title: "" ,vendorId:0};
  }
}
