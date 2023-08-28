import { Component } from '@angular/core';
import { BaseModal } from 'src/app/core/base-modal';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent extends BaseModal {
  public visible: boolean = false;
  public items: any = [
    {
      label: 'broc',
      price: 4.99,
      quantity: 3,
    }
  ]
}
