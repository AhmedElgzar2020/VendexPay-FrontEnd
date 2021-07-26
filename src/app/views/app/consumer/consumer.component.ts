import { Component, OnInit } from "@angular/core";
import { IVendor } from "src/app/models/vendor.model";

@Component({
  selector: "consumer",
  templateUrl: "./consumer.component.html",
})
export class ConsumerComponent implements OnInit {
  constructor() {}
  model: IVendor ;
  ngOnInit() {
    this.model= {
      email: "ahmed@llasclikj.kjp",
      id: 0,
      imgPath: "/assets/img/profile-pic-l-3.jpg",
      name: "Ahmed",
    };
  }
}
