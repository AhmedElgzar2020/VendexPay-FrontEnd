import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { ComponentsCardsModule } from 'src/app/components/cards/components.cards.module';
import { DataTableModule } from 'src/app/components/dataTable/dataTable.module';
import { VendorModule } from './vendor/vendor.module';
import { ConsumerModule } from './consumer/consumer.module';
import { POsModule } from './POs/Pos.module';
import { PartenerModule } from './partener/partener.module';
import { MachineModule } from './machine/machine.module';
import { MobilePaymentModule } from './mobilePayment/mobilePayment.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ AppComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    LayoutContainersModule,
    ComponentsCardsModule,
    DataTableModule,
    VendorModule,
    ConsumerModule,
    POsModule,
    PartenerModule,
    MachineModule,
    MobilePaymentModule,
    FormsModule,
  ]
})
export class AppModule { }

