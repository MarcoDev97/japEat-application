import { CartService } from './../../services/cart.service';
import { japEatService } from 'src/app/services/japEat.service';
import { Menu, Content } from './../../models/IjapEat';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private service: japEatService, private cartServ: CartService) {}

  menuList: Menu[];
  active: Menu;

  ngOnInit() {
    this.getMenu();
  }

  getMenu() {
    this.service.getAllMenu().subscribe((res) => {
      this.menuList = res;
      console.log(res);
    });
  }

  addToCart(cont: Content) {
    this.cartServ.addToCart(cont);
  }

  removeCartItem(cont: Content) {
    const list = this.cartServ.items.map((el) => el.menu.name);
    const index = list.indexOf(cont.name);
    if(index !== -1){
      this.cartServ.items.splice(index, 1);
    }

  }

}
