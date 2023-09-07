import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Product } from "../models/product.model";
import { ProductsService } from "../services/products.service";
import { dateGreatherOrEqualThanToday } from "./custom-validators";

export function createProductForm(fb: FormBuilder, productService: ProductsService, product: Product) {
  return fb.group(
    {
    id: [product?.id || '', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ],
      asyncValidators: [],
      updateOn: 'blur'
    }],
    name: new FormControl(product?.name || '', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100)
    ]),
    description: new FormControl(product?.description || '', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(200)
    ]),
    logo: new FormControl(product?.logo || '', [
      Validators.required
    ]),
    dateRelease: new FormControl(product?.date_release || '', [
      Validators.required
    ]),
    dateRevision: new FormControl(product?.date_revision || '', [
      Validators.required
    ]),
  });

}

export function makeProduct(form: FormGroup) {
  return {
    id: form.value.id ?? '',
    name: form.value.name ?? '',
    description: form.value.description ?? '',
    logo: form.value.logo ?? '',
    date_release: form.value.dateRelease ?? '',
    date_revision: form.value.dateRevision ?? '',
  }
}
