import { Component } from '@angular/core';
/* MODELS */
import { SOCIALS } from '../../data/mock-socials';
/* CONSTANTS */
import { MENUS } from '../../../shared/constants/menus';
/* SERVICES */
import { HeaderTitleService } from '../../../providers/header-title/header-title.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {

  public socials: any = SOCIALS;
  public subMenu = MENUS.SUB;
  get currentYear(): any {
    return this.getCurrentYear();
  }

  constructor(private headerTitleService: HeaderTitleService) { }

  /**
   * Update title in tab and in page header
   * Scroll to the top of the page
   *
   * @param {string} newTitle
   */
  public setTitle(newTitle: string): void {
    this.headerTitleService.setTitle(newTitle); // dynamic tab title
    document.getElementById('anchor-top').scrollIntoView({block: 'start', behavior: 'smooth'});
  }

  /**
   * Returns present year
   *
   * @returns {number}
   */
  public getCurrentYear(): number {
    return new Date().getFullYear();
  }

}
