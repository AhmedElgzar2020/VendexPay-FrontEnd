import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { ComponentsCardsModule } from 'src/app/components/cards/components.cards.module';
import { ConsumerComponent } from './consumer/consumer.component';
import { DataTableModule } from 'src/app/components/dataTable/dataTable.module';
import { POsComponent } from './POs/Pos.component';
import { VendorModule } from './vendor/vendor.module';
import { ConsumerModule } from './consumer/consumer.module';


@NgModule({
  declarations: [ AppComponent,POsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    LayoutContainersModule,
    ComponentsCardsModule,
    DataTableModule,
    VendorModule,
    ConsumerModule
  ]
})
export class AppModule { }

