import { NgModule } from "@angular/core";
import { ComponentsCardsModule } from "src/app/components/cards/components.cards.module";
import { DataTableModule } from "src/app/components/dataTable/dataTable.module";
import { LayoutContainersModule } from "src/app/containers/layout/layout.containers.module";
import { POsComponent } from "./Pos.component";
import { POsFormComponent } from "./Pos.form.component";
import { POsRoutingModule } from "./Pos.routing";

@NgModule({
  declarations: [POsComponent, POsFormComponent],
  imports: [
    ComponentsCardsModule,
    DataTableModule,
    LayoutContainersModule,
    POsRoutingModule,
  ],
  providers: [],
  exports: [POsComponent, POsFormComponent],
})
export class POsModule {}
