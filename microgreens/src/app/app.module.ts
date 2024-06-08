import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
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
import { GetTotalInCartPipe } from './pipes/get-total-in-cart.pipe';
import { GetPriceInCartPipe } from './pipes/get-price-in-cart.pipe';
import { OurStoryComponent } from './components/our-story/our-story.component';
import { FooterComponent } from './components/footer/footer.component';
import { StarterBannerComponent } from './components/starter-banner/starter-banner.component';
import { FaqComponent } from './components/faq/faq.component';
import { LoginComponent } from './components/login/login.component';
import { Amplify } from 'aws-amplify';
import amplifyconfig from '../amplifyconfiguration.json';
Amplify.configure(amplifyconfig);
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

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
    GetTotalInCartPipe,
    GetPriceInCartPipe,
    OurStoryComponent,
    FooterComponent,
    StarterBannerComponent,
    FaqComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InputTextModule,
    FormsModule,
    AmplifyAuthenticatorModule,
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
    CheckoutCartComponent,
    GetTotalInCartPipe,
    GetPriceInCartPipe,
    OurStoryComponent,
    FooterComponent,
    StarterBannerComponent,
    FaqComponent,
    LoginComponent
  ]
})
export class AppModule { }
