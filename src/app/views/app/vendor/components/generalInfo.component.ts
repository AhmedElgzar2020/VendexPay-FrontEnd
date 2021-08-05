import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CityModel, LookUpModel } from "src/app/models/lookUp.model";
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
  companyTypes: LookUpModel[] = [];
  cities: LookUpModel[] = [];
  constructor(private Service: APIService) {


  }
  ngOnInit() {
    this.getCountries();
    this.getCompanyTypes();

  }
  Action(event: any) {
    let data = { event: event, model: this.model,form:1 };
    this.GetAction.emit(data);
  }
  getCountries() {
    this.Service.get("/Country").subscribe((res: any) => {
      this.countries = res;
    });
  }

  getCompanyTypes() {
    this.Service.get("/CompanyType").subscribe((res: any) => {
      this.companyTypes = res;
    });
  }

  getCities(e:any) {
    this.Service.get("/City").subscribe((res: CityModel[]) => {
      debugger;
      this.cities = res.filter(x=>x.countryId==e.id);
    });
  }

  onFileChange(event) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.model.logo = reader.result as string;
     
   
      };
   
    }
  }
}
