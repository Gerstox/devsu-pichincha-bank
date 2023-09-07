import { DatePipe } from "@angular/common";
import { FormGroup } from "@angular/forms";

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

export function transformDate(pipe: DatePipe, date: string) {
  return pipe.transform(date, 'yyyy-MM-dd');
}

export function  addYear(date: string, years: number = 1) {
  const dateCopy = new Date(date);
  dateCopy.setDate(dateCopy.getDate() + 1);
  dateCopy.setFullYear(dateCopy.getFullYear() + years);
  return dateCopy.toDateString();
}
