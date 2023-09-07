import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { Product } from 'src/app/models/product.model';
import { By } from '@angular/platform-browser';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent]
    });
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    component.products = [
      {
        "id": "1",
        "name": "Product 1",
        "description": "Product 1 descripcion",
        "logo": "Product 1 image",
        "date_release": "Product 1 release",
        "date_revision": "Product 1 revision"
      },
      {
        "id": "2",
        "name": "Product 2",
        "description": "Product 2 descripcion",
        "logo": "Product 2 image",
        "date_release": "Product 2 release",
        "date_revision": "Product 2 revision"
      },
      {
        "id": "3",
        "name": "Product 3",
        "description": "Product 3 descripcion",
        "logo": "Product 3 image",
        "date_release": "Product 3 release",
        "date_revision": "Product 3 revision"
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('With input value "Product 3" should search 1 product', () => {
    const inputValue = 'Product 3';
    component.searchProducts(inputValue);
    expect(component.filteredProducts.length).toEqual(1);
  });

  it('Without input value should search 3 products', () => {
    const inputValue = '';
    component.searchProducts(inputValue);
    expect(component.filteredProducts.length).toEqual(3);
  });

  it('With input value "Pr" should search 3 products', () => {
    const inputValue = 'Pr';
    component.searchProducts(inputValue);
    expect(component.filteredProducts.length).toEqual(3);
  });

  it('With input value "Ninguno" should search 0 products', () => {
    const inputValue = 'Ninguno';
    component.searchProducts(inputValue);
    expect(component.filteredProducts.length).toEqual(0);
  });

  it('With products "[]" should return []', () => {
    const inputValue = '';
    component.products = [];
    component.searchProducts(inputValue);
    expect(component.filteredProducts).toEqual([]);
  });
});
