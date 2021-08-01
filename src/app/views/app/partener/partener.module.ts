import { NgModule } from "@angular/core";
import { ComponentsCardsModule } from "src/app/components/cards/components.cards.module";
import { DataTableModule } from "src/app/components/dataTable/dataTable.module";
import { LayoutContainersModule } from "src/app/containers/layout/layout.containers.module";
import { PartenerComponent } from "./partener.component";
import { PartenerFormComponent } from "./partener.form.component";
import { PartenerRoutingModule } from "./partener.routing";

@NgModule({
  declarations: [PartenerComponent, PartenerFormComponent],
  imports: [
    ComponentsCardsModule,
    DataTableModule,
    LayoutContainersModule,
    PartenerRoutingModule,
  ],
  providers: [],
  exports: [PartenerComponent, PartenerFormComponent],
})
export class PartenerModule {}
