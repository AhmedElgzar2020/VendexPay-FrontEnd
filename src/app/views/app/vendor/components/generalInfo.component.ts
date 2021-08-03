import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { LookUpModel } from "src/app/models/lookUp.model";
import { Marchant } from "src/app/models/vendor.model";
import { APIService } from "src/app/shared/api.service";

@Component({
  selector: "generalInfo",
  templateUrl: "./generalInfo.component.html",
})
export class GeneralInfoComponent implements OnInit {
  @Output() GetAction = new EventEmitter();
  @Input() inputModel: Marchant;
  model: Marchant = {
    address1: "",
    address2: "",
    cityId: 0,
    companyName: "",
    name: "",
    companyTypeId: 0,
    contacts: [],
    idNo: "",
    logo: "",
    offices: [],
    userName: "",
    vendorId: 0,
    zipCode: "",
  };
  countries: LookUpModel[] = [];
  constructor(private Service: APIService) {

    this.getCountries();

  }
  ngOnInit() {
  }
  Action(event: any) {
    let data = { event: event, model: this.model };
    this.GetAction.emit(data);
    /* switch (event) {
      case "Next":
        break;
      case "Skip":
        break;
      case "Back":
        break;
    } */
  }
  getCountries() {
    this.Service.get("/Country").subscribe((res: any) => {
      debugger;
      this.countries = res;
    });
  }
}
