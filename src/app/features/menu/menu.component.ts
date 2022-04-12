import { CartService } from './../../services/cart.service';
import { japEatService } from 'src/app/services/japEat.service';
import { Menu } from './../../models/IjapEat';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(
    private service: japEatService,
    private cartServ: CartService) {}

  menu: Menu[];
  active: Menu;
  init: string = 'Tutti'

  ngOnInit() {
    this.getMenu();
  }

  getMenu() {
    this.service.getAllMenu().subscribe((res) => {
      this.menu = res;
      console.log(res);
    });
  }

  addToCart(cont: any, active: Menu) {
    this.cartServ.addToCart(cont,active);
    console.log('CONT', cont)
  }


}
