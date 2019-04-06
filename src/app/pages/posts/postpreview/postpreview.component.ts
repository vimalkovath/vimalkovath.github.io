import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-postpreview',
  templateUrl: './postpreview.component.html',
  styleUrls: ['./postpreview.component.scss']
})
export class PostpreviewComponent implements OnInit {
  @Input() public focusedItem: any;
  @Input() public grid: any;
  @Input() public object: any;
  // @Output() public gridStyle = new EventEmitter;
  focusedItemBtn = false;
  constructor() { }

  ngOnInit() {
    if (this.grid === '') {
      // this.grid = 'row';
      this.grid = true;
    }
  }

  // this.moreInfo.emit(id);
  



}
