import { NgModule } from "@angular/core";
import { ComponentsCardsModule } from "src/app/components/cards/components.cards.module";
import { DataTableModule } from "src/app/components/dataTable/dataTable.module";
import { LayoutContainersModule } from "src/app/containers/layout/layout.containers.module";
import { VendorComponent } from "./vendor.component";
import { VendorFormComponent } from "./vendor.form.component";
import { VendorRoutingModule } from "./vendor.routing";

@NgModule({
  declarations: [VendorComponent, VendorFormComponent],
  imports: [
    ComponentsCardsModule,
    DataTableModule,
    LayoutContainersModule,
    VendorRoutingModule,
  ],
  providers: [],
  exports: [VendorComponent, VendorFormComponent],
})
export class VendorModule {}
