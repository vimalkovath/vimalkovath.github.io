import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss']
})

export class DetailsModalComponent {

  @Input() public details: any;
  @Input() public type = '';
  // @Output() public goToProject = new EventEmitter();

  constructor(public bsModalRef: BsModalRef) { }

  /**
   * Check if the project is a role or a project
   * If yes it means they have skills associated
   *
   * @returns {boolean}
   */
  public hasSkillsInvolved(): boolean {
    return this.type === 'role' || this.type === 'project';
  }

  /**
   * Check if link should redirect to a live website or to further doc
   * If no returns nothing (therefore remove the link)
   *
   * @returns {string}
   */
  public hasUrl(): string {
    return !this.details.url ? '' :
      (this.type === 'skill' || this.type === 'tool') ? 'info' : 'live';
  }

  /**
   * Navigates to the project details page of the selected object
   * passes its id
   *
   * @param {any} project
   */
  /*public goTo(project: any): void {
    this.analyticsService.captureCustomEvent(
      'navigation',
      `Navigate to details page for ${this.type}`,
      `${project.name}`,
      3);
    this.goToProject.emit(project);
  }*/

}
