import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/IjapEat';
import {MatDialog} from '@angular/material/dialog';
import { MatDialogComponent } from './../../shared/mat-dialog/mat-dialog.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cartServ: CartService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  removeToCart(cartItem: Menu) {
    const index = this.cartServ.items.indexOf(cartItem);
    this.cartServ.items.splice(index, 1);
  }

  sendCart(){
    this.cartServ.items = [];
    this.dialog.open(MatDialogComponent);

  }

}
