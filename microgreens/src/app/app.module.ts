import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule }
    from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StripePaymentComponent } from './components/stripe-payment/stripe-payment.component';
import { ProductComponent } from './components/product/product.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { AllProductsComponent } from './screens/all-products/all-products.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CartModalComponent } from './modals/cart-modal/cart-modal.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CheckoutCartComponent } from './modals/cart-modal/checkout-cart/checkout-cart.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StripePaymentComponent,
    ProductComponent,
    MainHeaderComponent,
    AllProductsComponent,
    WelcomeComponent,
    ShoppingCartComponent,
    CartModalComponent,
    CartItemComponent,
    CheckoutCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    StripePaymentComponent,
    ProductComponent,
    MainHeaderComponent,
    AllProductsComponent,
    ShoppingCartComponent,
    CartModalComponent,
    CartItemComponent,
    CheckoutCartComponent
  ]
})
export class AppModule { }
