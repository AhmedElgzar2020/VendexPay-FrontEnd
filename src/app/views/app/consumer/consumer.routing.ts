import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConsumerComponent } from "./consumer.component";
import { ConsumerFormComponent } from "./consumer.form.component";

const routes: Routes = [
  {
    path: "",
    component: ConsumerComponent,
  },
  { path: "form", component: ConsumerFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumerRoutingModule {}
