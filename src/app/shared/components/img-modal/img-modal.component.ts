import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-img-modal',
  templateUrl: './img-modal.component.html',
  styleUrls: ['./img-modal.component.scss']
})

export class ImgModalComponent {

  @Input() public pic: any = {};

  constructor(public bsModalRef: BsModalRef) {}

}
