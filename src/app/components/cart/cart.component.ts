import { Component, inject, Input, signal, Signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    CurrencyPipe
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartItemsArray: CartItem[] = [];
  totalPrice: Signal<number>;

  constructor(private cartService: CartService) {
    this.cartItemsArray = this.cartService.getCartArray();
    this.totalPrice = this.cartService.getTotalPrice;
  }

  addItem(item: CartItem) {
    this.cartService.addItem(item);
  }

  removeItem(item: CartItem) {
    this.cartService.removeItem(item);
  }
}

