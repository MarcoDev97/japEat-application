import { Menu, Content } from './../models/IjapEat';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  items: any[] = [];


  addToCart(menu: Content) {
    let cartItems = {
      menu
    };
    this.items.push(cartItems);
  }



}
