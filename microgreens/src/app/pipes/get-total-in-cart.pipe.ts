import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'getTotalInCart'
})
export class GetTotalInCartPipe implements PipeTransform {

  transform(cartItems: Product[] | null, ...args: unknown[]): number | undefined {
    let total: number = 0;
    return cartItems?.reduce((total, item) => item.count + total, 0);
  }

}
