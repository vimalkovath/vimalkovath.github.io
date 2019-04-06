import { Injectable } from '@angular/core';
// Services
import { ResolveByIdService } from '../resolve-by-id/resolve-by-id.service';
import { DetailsModalComponent } from '../../shared/components/details-modal/details-modal.component';
import { BsModalService } from 'ngx-bootstrap';
import { ImgModalComponent } from '../../shared/components/img-modal/img-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public configs: any;

  constructor(private resolveByIdService: ResolveByIdService,
              private bsModalService: BsModalService) {
    this.configs = {
      animated: true,
      keyboard: true,
      backdrop: true,
      ignoreBackdropClick: false
    };
  }

  /**
   * Resolve the item to display thanks to its id and type
   * set "initial state" - the name of this variable is fixed and SHOULD NOT BE CHANGED
   * returns the component, configs (interactions), class and values (parsed object and type) to the modal's ref
   *
   * @param {string} id
   * @param {string} type
   * @returns {any}
   */
  public openModal(id: string, type: string): any {
    this.resolveByIdService.resolveById(id, type);

    const initialState = { details: this.resolveByIdService.resolveById(id, type), type: type};

    return this.bsModalService.show(
      DetailsModalComponent,
      Object.assign({},
        this.configs,
      {
        class: 'modal-lg',
        initialState
      })
    );
  }

  /**
   * set "initial state" - the name of this variable is fixed and SHOULD NOT BE CHANGED
   * returns the component, configs (interactions), class and image to the modal's ref
   *
   * @param {any} image
   * @returns {any}
   */
  public openImgModal(image: any): any {

    const initialState = { pic: image };

    return this.bsModalService.show(
      ImgModalComponent,
      Object.assign({},
        this.configs,
      {
        initialState })
    );
  }

}
