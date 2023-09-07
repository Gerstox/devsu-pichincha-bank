import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product.model';
import { AlertService } from 'src/app/services/alert.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  pageSize: number = 5;

  constructor(
    private productService: ProductsService,
    private alertService: AlertService
    ) {}

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe({
      next: products => {
      this.products = products;
      this.filteredProducts = this.products;
      },
      error: error => {
        this.alertService.error('Ha ocurrido un error...', {});
        console.log(error)
      }
    });
  }

  searchProducts(filtered: Product[]) {
    this.filteredProducts = filtered;
  }

  changePageSize(size: string) {
    this.pageSize = Number(size);
  }
}
