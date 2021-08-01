import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { POsComponent } from "./Pos.component";
import { POsFormComponent } from "./Pos.form.component";

const routes: Routes = [
  {
    path: "",
    component: POsComponent,
  },
  { path: "form", component: POsFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class POsRoutingModule {}
