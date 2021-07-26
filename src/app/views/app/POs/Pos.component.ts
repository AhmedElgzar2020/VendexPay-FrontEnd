import { Component, OnInit } from "@angular/core";
import { IColumn } from "src/app/models/dataTable.column.model";
import { IVendor } from "src/app/models/vendor.model";

@Component({
  selector: "POs",
  templateUrl: "./POs.component.html",
})
export class POsComponent implements OnInit {
  constructor() {}
  model: IVendor[];
  columns: IColumn[];
  ngOnInit() {
    this.model = [
      {
        email: "ahmed@llasclikj.kjp",
        id: 0,
        imgPath: "/assets/img/profile-pic-l-3.jpg",
        name: "Ahmed",
      },
      {
        email: "ahmed@llasclikj.kjp",
        id: 0,
        imgPath: "/assets/img/profile-pic-l-3.jpg",
        name: "Ahmed",
      },
      {
        email: "ahmed@llasclikj.kjp",
        id: 0,
        imgPath: "/assets/img/profile-pic-l-3.jpg",
        name: "Ahmed",
      },
      {
        email: "ahmed@llasclikj.kjp",
        id: 0,
        imgPath: "/assets/img/profile-pic-l-3.jpg",
        name: "Ahmed",
      },
    ];
    this.columns = [{name:"id"},{name: "name"}, {name:"email"}];
  }
}
