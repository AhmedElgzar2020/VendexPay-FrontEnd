import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { POsComponent } from './POs/Pos.component';
import { VendorComponent } from './vendor/vendor.component';

const routes: Routes = [
    {
        path: '', component: AppComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'vendor' },
            { path: 'vendor', component: VendorComponent },
            { path: 'consumer', component: ConsumerComponent },
            { path: 'pos', component: POsComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
