import { Component, OnInit } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-lego-catalog',
  templateUrl: './lego-catalog.component.html',
  styleUrls: ['./lego-catalog.component.scss'],
})
export class LegoCatalogComponent implements OnInit {
  products: Product[] = [
    { id: 1, name: 'Technic - Mercedes-AMG F1 W14 E Desempenho', price: 2.199, image: 'https://legobrasil.vtexassets.com/arquivos/ids/185943/42171.jpg?v=638443015456600000' },
    { id: 2, name: 'Technic - Carro de Corrida McLaren Fórmula 1 ', price: 2.099, image: 'https://legobrasil.vtexassets.com/arquivos/ids/178163/42141_Carro_de_Corrida_McLaren_Formula_1_01.jpg?v=637843509228200000' },
    { id: 3, name: 'Speed Champions - Mercedes-AMG F1 W12 E Performance e Project One', price: 999.99, image: 'https://legobrasil.vtexassets.com/arquivos/ids/178462/76909_Mercedes-AMG_F1_W12_E_Performance_e_Mercedes-AMG_Project_One_01.jpg?v=637849562558000000'},
  ];

  constructor() {}

  ngOnInit(): void {}

  addToCart(product: Product | null): void {
    if (!product) {
      console.error('Produto inválido.');
      return;
    }

    try {
      console.log(`${product.name} foi adicionado ao carrinho!`);
    } catch (error) {
      console.error('Erro ao adicionar produto ao carrinho:', error);
    }
  }
}


