import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

import { Product } from '../../models/product.model';
import { FormBuilder } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { createProductForm, makeProduct } from 'src/app/utils/form-utils';
import { transformDate, addYear } from 'src/app/utils/utils';
import { existId, dateGreatherOrEqualThanToday } from 'src/app/utils/custom-validators';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  product!: Product | undefined;
  editing: boolean = false;
  canEditId: boolean = true;
  readonly canEditDateRevision: boolean = false;

  productForm = createProductForm(this.fb, this.productService, this.product!);

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private alertService: AlertService
  )
  {
    const productId: string = this.route.snapshot.params['productId'];
    if (productId) {
      this.productService.getProducts()
      .subscribe(products => {
        this.product = products.find((product) => product.id === productId);
        this.productForm.patchValue({
          ...this.product,
          dateRelease: transformDate(this.datePipe, this.product!.date_release),
          dateRevision: transformDate(this.datePipe, this.product!.date_revision)
        });

        this.canEditId = false;
        this.editing = true;
      });
    } else {
      this.id?.addAsyncValidators(existId(this.productService));
      this.dateRelease?.addValidators(dateGreatherOrEqualThanToday());
    }
  }

  get id() { return this.productForm.get('id'); }
  get name() { return this.productForm.get('name'); }
  get description() { return this.productForm.get('description'); }
  get logo() { return this.productForm.get('logo'); }
  get dateRelease() { return this.productForm.get('dateRelease'); }
  get dateRevision() { return this.productForm.get('dateRevision'); }

  submitForm() {
    this.product = makeProduct(this.productForm);

    if (!this.editing) {
      this.createProduct(this.productForm.get(['id'])!.value, this.product);
    } else {
      this.editProduct(this.product);
    }
  }

  createProduct(id: string, product: Product) {
    this.productService.productVerify(id || '')
      .subscribe({
        next: exist => {
          if(!exist) {
            this.productService.createProduct(product!)
            .subscribe({
              next: () => {
                this.reset();
                this.alertService.success('Se ha creado el producto correctamente.', {});
              },
              error: error => {
                console.log(error);
                this.alertService.error('Ha ocurrido un error...', {});
              }
            });
          } else {
            this.alertService.warn('Este id esta en uso.', {});
          }
        },
        error: error => {
          console.log(error);
          this.alertService.error('Ha ocurrido un error...', {});
        }
      });
  }

  editProduct(product: Product) {
    this.productService.updateProduct(product!)
      .subscribe(
        {
          next: () => {
            this.alertService.success('Se ha editado el producto correctamente.', {});
          },
          error: error => {
            console.log(error);
            this.alertService.error('Ha ocurrido un error...', {});
          }
        });
  }

  reset() {
    this.productForm.reset();
  }

  calcDateRevision(dateRelease: string) {
    const dateRevision = transformDate(this.datePipe, addYear(dateRelease));
    this.productForm.controls['dateRevision'].setValue(dateRevision);
  }
}
