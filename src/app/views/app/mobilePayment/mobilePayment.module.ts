import { NgModule } from "@angular/core";
import { ComponentsCardsModule } from "src/app/components/cards/components.cards.module";
import { DataTableModule } from "src/app/components/dataTable/dataTable.module";
import { LayoutContainersModule } from "src/app/containers/layout/layout.containers.module";
import { MobilePaymentComponent } from "./mobilePayment.component";
import { MobilePaymentFormComponent } from "./mobilePayment.form.component";
import { MobilePaymentRoutingModule } from "./mobilePayment.routing";

@NgModule({
  declarations: [MobilePaymentComponent, MobilePaymentFormComponent],
  imports: [
    ComponentsCardsModule,
    DataTableModule,
    LayoutContainersModule,
    MobilePaymentRoutingModule,
  ],
  providers: [],
  exports: [MobilePaymentComponent, MobilePaymentFormComponent],
})
export class MobilePaymentModule {}
