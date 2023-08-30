import { Component, Input } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
})
export class CartItemComponent {
  @Input() item: any = null;

  constructor(public shoppingCartService: ShoppingCartService) {}
}
