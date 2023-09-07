import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTableComponent } from './products-table.component';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';

describe('ProductsTableComponent', () => {
  let component: ProductsTableComponent;
  let fixture: ComponentFixture<ProductsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule, NgxPaginationModule],
      declarations: [ProductsTableComponent]
    });
    fixture = TestBed.createComponent(ProductsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
