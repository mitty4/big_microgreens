import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Quantity } from '../models/quantity';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  public possibleItemsMap: Map<string, Product> = new Map<string, Product>();
  public itemsInCartMap: Map<string, any> = new Map<string, any>();
  public possibleQuantityMap: Map<string, Quantity[]> = new Map<string, Quantity[]>();

  // TODO: set the observables for totals, item info
  public possibleItemsListener: BehaviorSubject<Product[]> = new BehaviorSubject(Array.from(this.possibleItemsMap.values()));
  public readonly possibleItems$: Observable<Product[]> = this.possibleItemsListener.asObservable();

  public cartItemsListener: BehaviorSubject<Product[]> = new BehaviorSubject(Array.from(this.itemsInCartMap.values()));
  public readonly cartItems$: Observable<Product[]> = this.cartItemsListener.asObservable();
  

  constructor() { 
    this._initDummyData();
    this._initDummyQuantityData();
  }

  public addItem(item: any) {
    let oldCount: number = 0;
    let oldItem: Product;
    if (this.possibleItemsMap.has(item?.label)) {
      oldItem = this.possibleItemsMap?.get(item?.label) || new Product(null);
    } else {
      oldItem = new Product(null);
    }
    if (this.itemsInCartMap.has(item?.label)) {
      // itemTotal = this.itemsInCartMap?.get(item?.label)?.count || 0;
      oldCount = this.itemsInCartMap?.get(item?.label)?.count;
    }
    const newCount: number = oldCount + 1;
    oldItem.count = newCount;
    this.itemsInCartMap.set(item?.label, oldItem)
    this.cartItemsListener.next(Array.from(this.itemsInCartMap.values()));
  }

  public trashItem(item: any) {
    let oldCount: number = 0;
    let oldItem: Product;
    if (this.possibleItemsMap.has(item?.label)) {
      oldItem = this.possibleItemsMap?.get(item?.label) || new Product(null);
    } else {
      oldItem = new Product(null);
    }
    if (this.itemsInCartMap.has(item?.label)) {
      // itemTotal = this.itemsInCartMap?.get(item?.label)?.count || 0;
      oldCount = this.itemsInCartMap?.get(item?.label)?.count;
    }
    const newCount: number = oldCount > 0 ? oldCount - 1 : 0;
    oldItem.count = newCount;
    this.itemsInCartMap.set(item?.label, oldItem)
    if (newCount < 1) {
      // remove from the cartMap
      this.itemsInCartMap.delete(item?.label);
    }
    this.cartItemsListener.next(Array.from(this.itemsInCartMap.values()));
  }

  private _initDummyData() {
    const product1: Product = new Product({ label: 'broccoli', description: 'grown with nutrients', price: 4.99, img: { src: 'assets/images/greens_bowl.png', alt: ''} });
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
    const product7: Product = new Product({ label: 'other other other', description: 'grown with nutrients', price: 4.99, img: { src: '', alt: ''} });
    this.possibleItemsMap.set('other other other', product6);
    this.possibleItemsListener.next(Array.from(this.possibleItemsMap.values()));
  }

  private _initDummyQuantityData() {
    const quantity1: Quantity = new Quantity({ label: '3oz', value: '3' });
    const quantity2: Quantity = new Quantity({ label: '6oz', value: '6' });
    const quantity3: Quantity = new Quantity({ label: '9oz', value: '9' });
    this.possibleQuantityMap.set('broccoli', [quantity1, quantity2, quantity3]);
  }

}
