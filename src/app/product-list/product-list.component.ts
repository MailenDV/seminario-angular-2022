import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from './Product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Product[] = [
    {
      type: "Playadito",
      taste: "Tradicional",
      weight: 1000,
      price: 780,
      stock: 20,
      image: "assets/img/playadito.webp",
      sale: false,
      quantity: 0,
    },
    {
      type: "Union",
      taste: "Tradicional",
      weight: 1000,
      price: 710,
      stock: 5,
      image: "assets/img/union.webp",
      sale: true,
      quantity: 0,
    },
    {
      type: "Taragui",
      taste: "Tradicional",
      weight: 1000,
      price: 726,
      stock: 12,
      image: "assets/img/taragui.webp",
      sale: false,
      quantity: 0,
    },
    {
      type: "Mañanita",
      taste: "Tradicional",
      weight: 1000,
      price: 785,
      stock: 0,
      image: "assets/img/mañanita.webp",
      sale: false,
      quantity: 0,
    },
    {
      type: "La Merced",
      taste: "Intenso",
      weight: 500,
      price: 596,
      stock: 12,
      image: "assets/img/merced.webp",
      sale: true,
      quantity: 0,
    },
    {
      type: "Rosamonte",
      taste: "Intenso",
      weight: 500,
      price: 405,
      stock: 0,
      image: "assets/img/rosamonte.webp",
      sale: false,
      quantity: 0,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  maxReached(msg: string) {
    alert(msg);
  }




}
