import { Component, OnInit, Input } from '@angular/core';
import { IColumn } from 'src/app/models/dataTable.column.model';
import { IVendor } from 'src/app/models/vendor.model';

@Component({
  selector: 'dataTable',
  templateUrl: './dataTable.component.html',
})
export class DataTableComponent implements OnInit {

  @Input() rows: any[];
  @Input() columns: IColumn[];

  constructor() { }

  ngOnInit() {
  }

}
