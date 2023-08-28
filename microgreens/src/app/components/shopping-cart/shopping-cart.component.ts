import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent {
  public visible: boolean = false;
  public items: any = [
    {label: 'broc',price: 4.99,quantity: 3,},
    {label: 'broc',price: 4.99,quantity: 3,},
    {label: 'broc',price: 4.99,quantity: 3,},
    {label: 'broc',price: 4.99,quantity: 3,},
    {label: 'broc',price: 4.99,quantity: 3,},
    {label: 'broc',price: 4.99,quantity: 3,},
    {label: 'broc',price: 4.99,quantity: 3,},
    {label: 'broc',price: 4.99,quantity: 3,},
    {label: 'broc',price: 4.99,quantity: 3,},
    {label: 'broc',price: 4.99,quantity: 3,},
    {label: 'broc',price: 4.99,quantity: 3,},
  ]
  public show: string = 'shoppingCart';

  public addressForm: FormGroup = this._fb.group({});

  constructor(private _modalService: ModalService, private _fb: FormBuilder) {
    
  }

  public onClickCart() {
    // alert('cart');
    this.show = 'shoppingCart';
    this.visible = true;
  }
}
