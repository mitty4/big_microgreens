import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
})
export class AllProductsComponent{
  public products: Product[] = [];
  public darkMode: boolean = true;

  constructor(public shoppingCartService: ShoppingCartService) {
    let i = 0;
    const _products: Product[] = []
    while(i < 9) {
      _products.push(new Product({ title:`Title ${i}`, description: 'description', img: { src: '', alt: 'alt-text'}}))
      i++
    }
    this.products = _products; 
  }
}
