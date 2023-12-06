import { Injectable } from '@angular/core';
import { Iitem } from './models/items.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartitemlist: Iitem[] = [];
  public productlist = new BehaviorSubject<Iitem[]>([]);

  constructor() {
    this.getSavedCartItems();
  }

  public getitems() {
    return this.productlist.asObservable();
  }

  public addtocart(item: Iitem) {
    this.cartitemlist.push(item);
    this.productlist.next(this.cartitemlist);
    this.saveCartItems();
  }

  public removecartitem(item: Iitem) {
    this.cartitemlist = this.cartitemlist.filter((a) => item.id !== a.id);
    this.productlist.next(this.cartitemlist);
    this.saveCartItems();
  }


  public saveCartItems() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartitemlist));
  }

  public getSavedCartItems() {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      this.cartitemlist = JSON.parse(savedCartItems);
      this.productlist.next(this.cartitemlist);
    }
  }
}