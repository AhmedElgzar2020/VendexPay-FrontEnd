import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { ComponentsCardsModule } from "src/app/components/cards/components.cards.module";
import { DataTableModule } from "src/app/components/dataTable/dataTable.module";
import { LayoutContainersModule } from "src/app/containers/layout/layout.containers.module";
import { APIService } from "src/app/shared/api.service";
import { AddressComponent } from "./components/address.component";
import { ContactComponent } from "./components/contact.component";
import { ContractComponent } from "./components/contract.component";
import { DocumentComponent } from "./components/document.component";
import { GeneralInfoComponent } from "./components/generalInfo.component";
import { ManagerComponent } from "./components/manager.component";
import { VendorComponent } from "./vendor.component";
import { VendorFormComponent } from "./vendor.form.component";
import { VendorRoutingModule } from "./vendor.routing";

@NgModule({
  declarations: [
    VendorComponent,
    VendorFormComponent,
    GeneralInfoComponent,
    AddressComponent,
    ContactComponent,
    ManagerComponent,
    DocumentComponent,
    ContractComponent,
    
  ],
  imports: [
    ComponentsCardsModule,
    DataTableModule,
    LayoutContainersModule,
    VendorRoutingModule,
    FormsModule,
    NgSelectModule,
  ],
  providers: [APIService],
  exports: [VendorComponent, VendorFormComponent],
})
export class VendorModule {}
