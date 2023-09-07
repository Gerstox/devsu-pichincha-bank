import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCardComponent } from './products-card.component';
import { NgxPaginationModule } from 'ngx-pagination';

describe('ProductsCardComponent', () => {
  let component: ProductsCardComponent;
  let fixture: ComponentFixture<ProductsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxPaginationModule],
      declarations: [ProductsCardComponent]
    });
    fixture = TestBed.createComponent(ProductsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
