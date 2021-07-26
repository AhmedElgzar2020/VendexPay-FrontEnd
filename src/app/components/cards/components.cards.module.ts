import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

import { GradientCardComponent } from './gradient-card/gradient-card.component';
import { GradientWithRadialProgressCardComponent } from './gradient-with-radial-progress-card/gradient-with-radial-progress-card.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PriceCardComponent } from './price-card/price-card.component';
import { RadialProcessCardComponent } from './radial-process-card/radial-process-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { VendorCardComponent } from './vendor-card/vendor-card.component';
import { ConsumerCardComponent } from './consumer-card/consumer-card.component';

@NgModule({
  declarations: [
    GradientCardComponent,
    GradientWithRadialProgressCardComponent,
    PostCardComponent,
    PriceCardComponent,
    RadialProcessCardComponent,
    VendorCardComponent,
    ConsumerCardComponent
  ],
  imports: [
    CommonModule,
    RoundProgressModule,
    SharedModule
  ],
  providers: [],
  exports: [
    GradientCardComponent,
    GradientWithRadialProgressCardComponent,
    PostCardComponent,
    PriceCardComponent,
    RadialProcessCardComponent,
    VendorCardComponent,
    ConsumerCardComponent
  ]
})

export class ComponentsCardsModule { }
