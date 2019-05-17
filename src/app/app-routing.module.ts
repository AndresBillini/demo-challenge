import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { OrderComponent } from './components/pages/order/order.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'order/:id', component: OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
