import { Menu, Content } from './../../../models/IjapEat';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent {

  @Input() menu: Menu[];
  @Input() active: Menu;
  @Output() addToCart: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() removeItem: EventEmitter<Content> = new EventEmitter<Content>();

  addToCartItem(cont: Content){
    this.addToCart.emit(cont);
  }

  removeCartItem(cont:Content){
    this.removeItem.emit(cont)
  }

}
