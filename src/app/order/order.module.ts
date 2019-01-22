import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';
import { OrderComponent } from './order.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { SharedModule } from 'app/shared/shared/shared.module';


const ROUTES: Routes = [
    {path: '', component: OrderComponent}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
      // DeliveryCostsComponent,
      OrderComponent,
      OrderItemsComponent
  ]
})
export class OrderModule { }
