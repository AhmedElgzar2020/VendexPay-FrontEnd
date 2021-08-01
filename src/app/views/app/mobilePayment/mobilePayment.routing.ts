import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MobilePaymentComponent } from "./mobilePayment.component";
import { MobilePaymentFormComponent } from "./mobilePayment.form.component";

const routes: Routes = [
  {
    path: "",
    component: MobilePaymentComponent,
  },
  { path: "form", component: MobilePaymentFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobilePaymentRoutingModule {}
