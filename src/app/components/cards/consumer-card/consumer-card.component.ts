import { Component, OnInit, Input } from '@angular/core';
import { IVendor } from 'src/app/models/vendor.model';

@Component({
  selector: 'app-consumer-card',
  templateUrl: './consumer-card.component.html',
})
export class ConsumerCardComponent implements OnInit {

  @Input() vendor: IVendor;

  constructor() { }

  ngOnInit() {
  }

}
