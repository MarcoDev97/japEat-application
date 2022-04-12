import { Menu } from './../models/IjapEat';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  items: any[] = [];


  addToCart(menu: Menu, name: Menu) {
    let cartItems = {
      menu,
      name,
    };
    this.items.push(cartItems);
  }



}
