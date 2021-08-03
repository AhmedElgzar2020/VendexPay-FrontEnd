import { Component, OnInit, Input } from '@angular/core';
import { Column } from 'src/app/models/dataTable.column.model';

@Component({
  selector: 'dataTable',
  templateUrl: './dataTable.component.html',
})
export class DataTableComponent implements OnInit {

  @Input() rows: any[];
  @Input() columns: Column[];

  constructor() { }

  ngOnInit() {
  }

}
