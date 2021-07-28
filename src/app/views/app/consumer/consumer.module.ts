import { NgModule } from "@angular/core";
import { ComponentsCardsModule } from "src/app/components/cards/components.cards.module";
import { DataTableModule } from "src/app/components/dataTable/dataTable.module";
import { LayoutContainersModule } from "src/app/containers/layout/layout.containers.module";
import { ConsumerComponent } from "./consumer.component";
import { ConsumerFormComponent } from "./consumer.form.component";
import { ConsumerRoutingModule } from "./consumer.routing";

@NgModule({
  declarations: [ConsumerFormComponent, ConsumerComponent],
  imports: [
    ComponentsCardsModule,
    DataTableModule,
    LayoutContainersModule,
    ConsumerRoutingModule,
  ],
  providers: [],
  exports: [ConsumerFormComponent, ConsumerComponent],
})
export class ConsumerModule {}
