import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe(products => {
      this.products = products;
      this.filteredProducts = this.products;
    });
  }

  searchProducts(filtered: Product[]) {
    this.filteredProducts = filtered;

  }

  // searchProducts(search: string) {
  //   this.filteredProducts = this.products;
  //   if (search.length > 2) {
  //     this.filteredProducts = this.products
  //     .filter(
  //       (product) => product?.name.toLowerCase().includes(search.toLowerCase())
  //       );
  //   }
  // }
}
