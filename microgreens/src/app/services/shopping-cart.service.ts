import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  public itemCountsMap: Map<string, number> = new Map<string, number>();
  public possibleItemsMap: Map<string, Product> = new Map<string, Product>();
  public itemsInCartMap: Map<string, any> = new Map<string, any>();

  // TODO: set the observables for totals, item info
  public possibleItemsListener: BehaviorSubject<Product[]> = new BehaviorSubject(Array.from(this.possibleItemsMap.values()));
  public readonly possibleItems$: Observable<Product[]> = this.possibleItemsListener.asObservable();

  constructor() { 
    this._initDummyData();

  }

  public addItem(item: any) {
    let itemTotal: number | undefined = 0;
    if (this.itemCountsMap.has(item?.label)) {
      itemTotal = this.itemCountsMap?.get(item?.label) || 0;
    }
    this.itemCountsMap.set(item?.label, itemTotal++)
  }

  public trashItem(item: any) {
    let itemTotal: number | undefined = 0;
    if (this.itemCountsMap.has(item?.label)) {
      itemTotal = this.itemCountsMap?.get(item?.label) || 0;
    }
    this.itemCountsMap.set(item?.label, itemTotal--)
  }

  private _initDummyData() {
    const product1: Product = new Product({ label: 'broccoli', description: 'grown with nutrients', price: 4.99, img: { src: '', alt: ''} });
    this.possibleItemsMap.set('broccoli', product1);
    const product2: Product = new Product({ label: 'arugala', description: 'grown with nutrients', price: 4.99, img: { src: '', alt: ''} });
    this.possibleItemsMap.set('arugala', product2);
    const product3: Product = new Product({ label: 'kale', description: 'grown with nutrients', price: 4.99, img: { src: '', alt: ''} });
    this.possibleItemsMap.set('kale', product3);
    const product4: Product = new Product({ label: 'spinach', description: 'grown with nutrients', price: 4.99, img: { src: '', alt: ''} });
    this.possibleItemsMap.set('spinach', product4);
    const product5: Product = new Product({ label: 'other', description: 'grown with nutrients', price: 4.99, img: { src: '', alt: ''} });
    this.possibleItemsMap.set('other', product5);
    const product6: Product = new Product({ label: 'other other', description: 'grown with nutrients', price: 4.99, img: { src: '', alt: ''} });
    this.possibleItemsMap.set('other other', product6);
    this.possibleItemsListener.next(Array.from(this.possibleItemsMap.values()));
  }

}
