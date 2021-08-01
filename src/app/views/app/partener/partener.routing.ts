import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PartenerComponent } from "./partener.component";
import { PartenerFormComponent } from "./partener.form.component";

const routes: Routes = [
  {
    path: "",
    component: PartenerComponent,
  },
  { path: "form", component: PartenerFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartenerRoutingModule {}
