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
  
  public get itemsInCart(): boolean {
    return this.itemsInCartMap.size > 0;
  }

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
    const product1: Product = new Product({ label: 'Radish Microgreens', sublabel: 'The Spicy Entertainer', description: "Meet the Radish Microgreen, a vibrant performer with stems dressed in dazzling shades of red and purple. This microgreen brings a spicy kick to any dish, invigorating your taste buds with its bold flavor. Its crisp texture makes it not just a visual standout, but also a delightful addition to salads and sandwiches where it dances brilliantly with other ingredients.", price: 4.99, img: { src: 'assets/images/greens_bowl.png', alt: ''} });
    this.possibleItemsMap.set(product1.label, product1);
    const product2: Product = new Product({ label: 'Arugula Microgreens', sublabel: 'The Peppery Sophisticate', description: "Arugula Microgreens are the essence of peppery sophistication. With a bold, slightly tangy flavor that commands attention, they are the perfect garnish for those who appreciate a bit of zest. Their delicate leaves add not just flavor but a refined texture to pizzas, pastas, and gourmet sandwiches, making every meal an elegant affair.", price: 4.99, img: { src: 'assets/images/greens_bowl.png', alt: ''} });
    this.possibleItemsMap.set(product2.label, product2);
    const product3: Product = new Product({ label: 'Pea Shoots', sublabel: 'The Sweet Optimist', description: "Pea Shoots are like a cheerful friend who brings sweetness to your day. Their tender shoots are bursting with a refreshing sweetness that complements both light and hearty dishes. Add them to a stir-fry for a subtle sweetness or let them shine in a fresh garden salad. Their bright green leaves not only look fresh but elevate the nutritional value of any meal.", price: 4.99, img: { src: 'assets/images/greens_bowl.png', alt: ''} });
    this.possibleItemsMap.set(product3.label, product3);
    const product4: Product = new Product({ label: 'Sunflower Microgreens', sublabel: 'The Nutty Cruncher', description: "Sunflower Microgreens are the life of the party with their nutty flavor and satisfying crunch. These robust greens are a culinary delight, perfect for adding a crispy texture to wraps or as a hearty topping on smoothie bowls. Their thick, crunchy leaves are as nutritious as they are delicious, making them a favorite for those who crave a wholesome bite.", price: 4.99, img: { src: 'assets/images/greens_bowl.png', alt: ''} });
    this.possibleItemsMap.set(product4.label, product4);
    const product5: Product = new Product({ label: 'Kale Microgreens', sublabel: 'The Mild Superhero', description: "Kale Microgreens offer a gentler take on the classic kale flavor—milder, yet equally nutritious. These tender yet crisp greens are a superfood that doesn't overpower, making them an ideal companion for dishes that need a subtle touch of green goodness. Sprinkle them on soups or mix into a smoothie for a health boost without the bitter edge.", price: 4.99, img: { src: 'assets/images/greens_bowl.png', alt: ''} });
    this.possibleItemsMap.set(product5.label, product5);
    const product6: Product = new Product({ label: 'Beet Microgreens', sublabel: 'The Sweetheart', description: "Beet Microgreens are true sweethearts with their lovely red and pink stems and a gently sweet flavor that whispers rather than shouts. Their earthy undertones and beautiful color make them a fantastic visual and taste enhancer for elegant salads and decorative plating. They offer a touch of sweetness that is as pleasing to the palate as their appearance is to the eye.", price: 4.99, img: { src: 'assets/images/greens_bowl.png', alt: ''} });
    this.possibleItemsMap.set(product6.label, product6);
    const product7: Product = new Product({ label: 'Wheatgrass', sublabel: 'The Intense Purist', description: "Wheatgrass is the purist's choice, packed with an intense nutrient profile that benefits the body and soul. Its distinct, vibrant green blades offer a potent burst of energy and a bold, earthy flavor that is best enjoyed in small doses. Incorporate it into juices or smoothies for a revitalizing detox that cleanses as it nourishes.", price: 4.99, img: { src: 'assets/images/greens_bowl.png', alt: ''} });
    this.possibleItemsMap.set(product7.label, product7);
    this.possibleItemsListener.next(Array.from(this.possibleItemsMap.values()));
  }

  private _initDummyQuantityData() {
    const quantity1: Quantity = new Quantity({ label: '3 oz', value: '3' });
    const quantity2: Quantity = new Quantity({ label: '6 oz', value: '6' });
    const quantity3: Quantity = new Quantity({ label: '9 oz', value: '9' });
    this.possibleItemsMap.forEach((val, key) => this.possibleQuantityMap.set(key, [quantity1, quantity2, quantity3]))
  }

}
