import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Quantity } from 'src/app/models/quantity';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() set product(prod: Product) {
    this._product = prod;
    this.quantityOptions = this.shoppingCartService.possibleQuantityMap?.get(prod.label) as Quantity[];
  }
  public quantityOptions: Quantity[] = []; 

  private _product: Product = new Product(null);

  public get product(): Product {
    return this._product;
  }

  constructor(public shoppingCartService: ShoppingCartService) {
  }
}
