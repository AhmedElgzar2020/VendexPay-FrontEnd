import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { POsComponent } from './POs/Pos.component';

const routes: Routes = [
    {
        path: '', component: AppComponent,
        children: [
            { path: 'vendor', loadChildren: () => import('./vendor/vendor.module').then(m => m.VendorModule) },
            { path: 'partener', loadChildren: () => import('./partener/partener.module').then(m => m.PartenerModule) },
            { path: 'consumer', loadChildren: () => import('./consumer/consumer.module').then(m => m.ConsumerModule) },
            { path: 'pos', loadChildren: () => import('./POs/Pos.module').then(m => m.POsModule) },
            { path: 'machine', loadChildren: () => import('./machine/machine.module').then(m => m.MachineModule) },
            { path: 'mobilePayment', loadChildren: () => import('./mobilePayment/mobilePayment.module').then(m => m.MobilePaymentModule) },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
