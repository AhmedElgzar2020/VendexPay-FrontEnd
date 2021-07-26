import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RoundProgressModule } from "angular-svg-round-progressbar";
import { DataTableComponent } from "./dataTable.component";
import { SharedModule } from "src/app/shared/shared.module";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

@NgModule({
  declarations: [DataTableComponent],
  imports: [CommonModule, RoundProgressModule, SharedModule,NgxDatatableModule],
  providers: [],
  exports: [DataTableComponent],
})
export class DataTableModule {}
