import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Balayia, ComputerCard, CR } from "src/app/models/vendor.model";

@Component({
  selector: "document",
  templateUrl: "./document.component.html",
})
export class DocumentComponent implements OnInit {
  @Output() GetAction = new EventEmitter();
  @Input() inputModel;
  model = {
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
  CRModel:CR={
    CR_No:0,
    DocumentId:0,
    ExpiryDate:undefined,
    LegalFirm:"",
    PrintDate:undefined,
    QAR:0,
    StartDate:undefined,
    TaxId_No:0,
    WebSite:"" 
  };
  BalayiaModel:Balayia={
    DocumentId:0,
    ExpiryDate:undefined,
    PrintDate:undefined,
    TradingNo:0,
    Type:""
  };
  ComputerCardModel:ComputerCard={
    CardNo:0,
    DocumentId:0,
    ExpiryDate:undefined,
    Sector:""
  }
  constructor() {}
  ngOnInit() {}
  Action(event: any) {
    let data = { event: event };
    this.GetAction.emit(data);
  }
}
