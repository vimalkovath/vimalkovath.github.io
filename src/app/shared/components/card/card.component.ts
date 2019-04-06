import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GAnalyticsService } from '../../../providers/g-analytics/g-analytics.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {

  @Input() public object: any;
  @Output() public moreInfo = new EventEmitter();

  constructor(private analyticsService: GAnalyticsService) {  }

  /**
   * Emit the id of the object to parent view
   * to populate the modal
   *
   * @param id
   * @returns {any}
   */
  public getMoreInfo(id: string): any {
    this.analyticsService.captureCustomEvent(
      'modal',
      `Open modal`,
      `${this.object.name}`,
      2);
    this.moreInfo.emit(id);
  }

}
