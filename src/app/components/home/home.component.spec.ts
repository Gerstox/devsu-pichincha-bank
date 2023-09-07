import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from '../search/search.component';
import { ProductsCardComponent } from '../products-card/products-card.component';
import { ProductsTableComponent } from '../products-table/products-table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Product } from 'src/app/models/product.model';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, HttpClientModule, NgxPaginationModule, MatIconModule],
      declarations: [HomeComponent, SearchComponent, ProductsCardComponent, ProductsTableComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
