import { Component, OnInit } from "@angular/core";
import { IColumn } from "src/app/models/dataTable.column.model";
import { Vendor } from "src/app/models/vendor.model";

@Component({
  selector: "Machine",
  templateUrl: "./Machine.component.html",
})
export class MachineComponent implements OnInit {
  constructor() {}
  model: Vendor[];
  columns: IColumn[];
  ngOnInit() {
    this.model = [
    ];
    this.columns = [{name:"id"},{name: "name"}, {name:"email"}];
  }
}
