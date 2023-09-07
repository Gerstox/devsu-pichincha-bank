import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { ProductsService } from "../services/products.service";
import { map } from 'rxjs/operators'

export function existId(service: ProductsService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return service.productVerify(control.value)
      .pipe(
          map(product => product ? {productExists:true} : null)
      );
  }
}

export function dateGreatherOrEqualThanToday() {
  return (control:AbstractControl) : ValidationErrors | null => {

    const value = control.value;

    if (!value) {
      return null;
    }

    const releaseDate = new Date(value);
    const today = new Date();

    releaseDate.setDate(releaseDate.getDate() + 1);
    releaseDate.setHours(0, 0, 1);
    today.setHours(0, 0, 0);

    const dateValid = releaseDate >= today;

    return !dateValid ? {releaseInvalid:true}: null;
  }
}
