import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { VendorComponent } from './vendor/vendor.component';
import { ComponentsCardsModule } from 'src/app/components/cards/components.cards.module';
import { ConsumerComponent } from './consumer/consumer.component';
import { DataTableModule } from 'src/app/components/dataTable/dataTable.module';
import { POsComponent } from './POs/Pos.component';


@NgModule({
  declarations: [ AppComponent,VendorComponent,ConsumerComponent,POsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    LayoutContainersModule,
    ComponentsCardsModule,
    DataTableModule
  ]
})
export class AppModule { }

