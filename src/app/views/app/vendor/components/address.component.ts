import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { LookUpModel } from "src/app/models/lookUp.model";
import { Office } from "src/app/models/vendor.model";
import { APIService } from "src/app/shared/api.service";

@Component({
  selector: "address",
  templateUrl: "./address.component.html",
})
export class AddressComponent implements OnInit {
  @Output() GetAction = new EventEmitter();
  @Input() inputModel: Office;
  model: Office = {
    buildingNo: "",
    buildingTypeid: 0,
    email: "",
    marchantId: 0,
    fax: "",
    phone: "",
    streetNo: "",
    webSite: "",
    zoneNo: "",
  };
  buildingTypes: LookUpModel[] = [];

  constructor(private Service: APIService) {}
  ngOnInit() {
    this.getBuildingTypes();
  }
  Action(event: any) {
    let data = { event: event, model: this.model,form:2 };
    this.GetAction.emit(data);
  }

  getBuildingTypes() {
    this.Service.get("/Building").subscribe((res: any) => {
      debugger;
      this.buildingTypes = res;
    });
  }
}
