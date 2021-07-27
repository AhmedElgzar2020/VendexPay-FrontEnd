import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VendorComponent } from "./vendor.component";
import { VendorFormComponent } from "./vendor.form.component";

const routes: Routes = [
  {
    path: "",
    component: VendorComponent,
  },
  { path: "form", component: VendorFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorRoutingModule {}
