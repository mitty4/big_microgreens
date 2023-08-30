import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'getPriceInCart'
})
export class GetPriceInCartPipe implements PipeTransform {

  transform(cartItems: Product[] | null, ...args: unknown[]): string | undefined {
    let total: number = 0;
    const finalPrice: number | undefined = cartItems?.reduce((total, item) => (item.price * item.count) + total, 0);
    return finalPrice?.toFixed(2);
  }

}
