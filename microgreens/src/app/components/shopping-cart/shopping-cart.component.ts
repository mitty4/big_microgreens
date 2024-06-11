import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent {
  public visible: boolean = false;
  public itemsTotal: number = 0;
  public items: any = [];
  public show: string = 'shoppingCart';
  public showInAmplify: string = 'addressForm';
  public orderType: string = 'subscription';
  public useUserInfo: boolean = true;
  private _subscriptions: Subscription[] = [];

  public addressForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    address1: new FormControl('', [Validators.required]),
    address2: new FormControl(''),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zipcode: new FormControl('', [Validators.required]),
    orderType: new FormControl('subscription', [Validators.required]),
  });

  public get header() {
    switch (this.show) {
      case 'shoppingCart':
        return 'Shopping Cart';
      case 'loginNecessary':
        return 'Order Details';
      case 'addressForm':
        return 'Delivery Information';
      case 'paymentForm':
        return 'Payment Information';
      
    }
    return 'Cart';
  }

  public get formIsValid(): boolean {
    return this.addressForm.valid;
  }

  constructor(
    private _modalService: ModalService, 
    public shoppingCartService: ShoppingCartService
  ) {
    // const _shoppingCartItemsSubscription(): Subscription {
    //   return this._shoppingCartService.cartItems$.subscribe((cartItems) => {
    //     this.
    //   })
    // }
  }

  public onClickCart() {
    this.show = 'shoppingCart';
    this.visible = true;

    
  }

  onClickAddItem(item: any) {
    this.shoppingCartService.addItem(item);
  }


}
