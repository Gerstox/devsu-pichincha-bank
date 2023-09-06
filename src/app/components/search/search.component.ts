import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Input() products: Product[] = [];
  @Output() onSearchProduct = new EventEmitter<Product[]>();
  filteredProducts: Product[] = [];

  searchProducts(search: string) {
    this.filteredProducts = this.products;
    if (search.length > 2) {
      this.filteredProducts = this.products
      .filter(
        (product) => product?.name.toLowerCase().includes(search.toLowerCase())
        );
    }
    this.onSearchProduct.emit(this.filteredProducts);
  }
}
