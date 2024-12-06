import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { Lego } from '../../models/lego';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-lego-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './lego-card.component.html',
  styleUrls: ['./lego-card.component.scss']
})
export class LegoCardComponent {
  @Input() lego?: Lego = {
    id: 0,
    title: 'Lego Mercedes',
    platform: 'N/A',
    imageLink: 'https://m.media-amazon.com/images/I/81PLkSprmeL.jpg',
    price: 0,
    description: 'Lego Miniatura Mercedes Formula 1.',
    availableInStock: 10,
    product: 'Lego'
  };

  constructor(private cartService: CartService) {
  }

  addLegoToCart(lego: Lego) {
    console.log(`Adicionei o item ${lego.title} ao carrinho!`);
    this.cartService.addItemToCart(lego);
  }
}

