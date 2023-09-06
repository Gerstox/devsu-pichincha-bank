import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl = `${environment.API_URL}/bp/products`;

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  createProduct(product: Product) {
    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(product: Product) {
    return this.http.patch<Product>(this.apiUrl, product);
  }

  deleteProduct(id: string) {
    return this.http.delete<Product>(this.apiUrl);
  }

  productVerify(id: string) {
    const params = {
      params: {
        id
      }
    }
    return this.http.get<Boolean>(`${ this.apiUrl }/verification`, params);
  }
}
