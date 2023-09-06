import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @Input() product!: Product;

  productForm = new FormGroup({
    id: new FormControl(this.product?.id || '', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
    ]),
    name: new FormControl(this.product?.name || '', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100)
    ]),
    description: new FormControl(this.product?.description || '', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(200)
    ]),
    logo: new FormControl(this.product?.logo || '', [
      Validators.required
    ]),
    dateRelease: new FormControl(this.product?.date_release || '', [
      Validators.required
    ]),
    dateRevision: new FormControl(this.product?.date_revision || '', [
      Validators.required
    ]),
  });

  // productForm = new FormGroup({
  //   id: new FormControl(''),
  //   name: new FormControl(''),
  //   description: new FormControl(''),
  //   logo: new FormControl(''),
  //   dateRelease: new FormControl(''),
  //   dateRevision: new FormControl(''),
  // });

  constructor(private productService: ProductsService) {}

  get id() { return this.productForm.get('id'); }
  get name() { return this.productForm.get('name'); }
  get description() { return this.productForm.get('description'); }
  get logo() { return this.productForm.get('logo'); }
  get dateRelease() { return this.productForm.get('dateRelease'); }
  get dateRevision() { return this.productForm.get('id'); }

  submitForm() {
    this.product = {
      id: this.productForm.value.id ?? '',
      name: this.productForm.value.name ?? '',
      description: this.productForm.value.description ?? '',
      logo: this.productForm.value.logo ?? '',
      date_release: this.productForm.value.dateRelease ?? '',
      date_revision: this.productForm.value.dateRevision ?? '',
    }
    console.log(this.product);

    this.productService.productVerify(this.productForm.value.id || '')
      .subscribe(exist => {
        if(!exist) {
            this.productService.createProduct(this.product)
            .subscribe(product => {
              console.log(product);
            });
            console.log('Este id esta disponible');
        } else {
          console.log('Este id esta en uso');
        }
    })

  }
  reset() {
    this.productForm.reset();
  }

  /**
   * Add custom validators
   *
   * existId
   * dateGreatherOrEqualThanToday
   * dateTodayPlus1Year
   */

}
