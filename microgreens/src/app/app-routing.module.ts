import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StripePaymentComponent } from './components/stripe-payment/stripe-payment.component';
import { AllProductsComponent } from './screens/all-products/all-products.component';

const routes: Routes = [
  { path: '', component: AllProductsComponent },
  { path: 'cart', component: StripePaymentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
