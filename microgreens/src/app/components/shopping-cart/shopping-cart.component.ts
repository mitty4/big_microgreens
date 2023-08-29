import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent {
  public visible: boolean = false;
  public itemsTotal: number = 0;
  public items: any = [];
  public show: string = 'shoppingCart';

  public addressForm: FormGroup = this._fb.group({
    email: ['', [Validators.email]],
    firstname: '',
    lastname: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
  });

  public get header() {
    switch (this.show) {
      case 'shoppingCart':
        return 'Shopping Cart';
      case 'addressForm':
        return 'Delivery Information';
      case 'paymentForm':
        return 'Payment Information';
    }
    return 'Cart';
  }

  constructor(
    private _modalService: ModalService, 
    private _fb: FormBuilder, 
    private _shoppingCartService: ShoppingCartService
  ) {
    
  }

  public onClickCart() {
    // alert('cart');
    this.show = 'shoppingCart';
    this.visible = true;
  }

  onClickAddItem(item: any) {
    this._shoppingCartService.addItem(item);
  }

}
