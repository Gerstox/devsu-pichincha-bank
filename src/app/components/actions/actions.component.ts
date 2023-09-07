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
  @Input() product: Product = {
    id: '',
    name: '',
    description: '',
    logo: '',
    date_release: '',
    date_revision: ''
  };

  constructor(
    private productService: ProductsService,
    private modalService: ModalService,
    private alertService: AlertService
  ) {}

  showDeleteModal(deleteModal: TemplateRef<any>){
    this.modalService.open(deleteModal, {
      size: 'lg',
      title: 'Eliminacion',
      reference: `[ ${this.product?.id} ] ${this.product?.name}`
    })
      .subscribe(action => {
        if (action === 'confirm') {
          this.productService.deleteProduct(this.product?.id)
            .subscribe({
              next: () => {
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
