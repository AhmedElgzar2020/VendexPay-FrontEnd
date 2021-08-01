import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MachineComponent } from "./machine.component";
import { MachineFormComponent } from "./machine.form.component";

const routes: Routes = [
  {
    path: "",
    component: MachineComponent,
  },
  { path: "form", component: MachineFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineRoutingModule {}
