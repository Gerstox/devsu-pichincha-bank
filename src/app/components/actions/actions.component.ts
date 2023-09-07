import { Component, Input, TemplateRef } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { AlertService } from 'src/app/services/alert.service';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent {
  @Input() product!: Product;

  constructor(
    private productService: ProductsService,
    private modalService: ModalService,
    private alertService: AlertService
  ) {}

  showDeleteModal(deleteModal: TemplateRef<any>){
    this.modalService.open(deleteModal, {
      size: 'lg',
      title: 'Eliminacion',
      reference: `[ ${this.product.id} ] ${this.product.name}`
    })
      .subscribe(action => {
        if (action === 'confirm') {
          // Corregir deprecated subscribe
          this.productService.deleteProduct(this.product.id)
            .subscribe({
              next: response => {
                this.alertService.success('Se ha eliminado el producto correctamente.', {});
              },
              error: error => {
                console.log(error);
                this.alertService.error('Ha ocurrido un error...', {});
              }
            });
        }
      });
  }
}
