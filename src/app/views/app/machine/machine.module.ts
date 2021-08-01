import { NgModule } from "@angular/core";
import { ComponentsCardsModule } from "src/app/components/cards/components.cards.module";
import { DataTableModule } from "src/app/components/dataTable/dataTable.module";
import { LayoutContainersModule } from "src/app/containers/layout/layout.containers.module";
import { MachineComponent } from "./machine.component";
import { MachineFormComponent } from "./machine.form.component";
import { MachineRoutingModule } from "./machine.routing";

@NgModule({
  declarations: [MachineComponent, MachineFormComponent],
  imports: [
    ComponentsCardsModule,
    DataTableModule,
    LayoutContainersModule,
    MachineRoutingModule,
  ],
  providers: [],
  exports: [MachineComponent, MachineFormComponent],
})
export class MachineModule {}
