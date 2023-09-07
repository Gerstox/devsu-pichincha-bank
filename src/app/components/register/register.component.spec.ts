import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Product } from 'src/app/models/product.model';


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, AppRoutingModule, ReactiveFormsModule],
      declarations: [RegisterComponent],
      providers: [DatePipe]
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Formulario de registro'`, () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Formulario de registro');
  });

  it('should render title', () => {
      const fixture = TestBed.createComponent(RegisterComponent);
      fixture.detectChanges();
      const debugElement = fixture.debugElement as DebugElement;
      const h1Debug = debugElement.query(By.css('.register-form')) as DebugElement;
      const compiled = h1Debug.nativeElement as HTMLElement;
      expect(compiled?.textContent).toContain('Formulario de registro');
  });

  it('should create a product', () => {
    const id: string = '999';
    const newProduct: Product = {
      "id": id,
      "name": "Product 999",
      "description": "Producto 999 descripcion",
      "logo": "Producto 999 logo",
      "date_release": "2023-07-03",
      "date_revision": "2024-07-03"
    };
    component.createProduct(id, newProduct);

    fixture.detectChanges();
    const debugElement = fixture.debugElement as DebugElement;
    const alertDebug = debugElement.query(By.css('.btn-disabled')) as DebugElement;
    const alertElement = alertDebug.nativeElement as HTMLElement;
    expect(alertElement).toBeDefined();
  });
});
