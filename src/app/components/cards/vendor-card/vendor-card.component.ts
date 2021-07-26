import { Component, OnInit, Input } from '@angular/core';
import { IVendor } from 'src/app/models/vendor.model';

@Component({
  selector: 'app-vendor-card',
  templateUrl: './vendor-card.component.html',
})
export class VendorCardComponent implements OnInit {

  @Input() vendor: IVendor;

  constructor() { }

  ngOnInit() {
  }

}
