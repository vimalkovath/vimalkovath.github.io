import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Location } from '@angular/common';
// Services
import { TranslationsService } from '../../../translations/service/translations.service';
import { CookieService } from '../../../providers/cookie/cookie.service';
import { HeaderTitleService } from '../../../providers/header-title/header-title.service';
// Constants
import { MENUS } from '../../../shared/constants/menus';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  public supportedLanguages: Array<any>;
  public currentFlag: string;
  public menu = MENUS.MAIN || 'Could not render the menu';
  public pageHasChanged = false;
  public fontHasChanged = false;

  constructor(private headerTitleService: HeaderTitleService,
              private translate: TranslationsService,
              private cookieService: CookieService,
              private renderer: Renderer2,
              private location: Location) { }

  ngOnInit() {
    // standing data
    this.supportedLanguages = [
      { display: 'In Eng', value: 'eng', flag: 'assets/img/svg/flags/in.svg' },
      { display: 'Uk Eng', value: 'in', flag: 'assets/img/svg/flags/uk.svg' },
      { display: 'Français', value: 'fra', flag: 'assets/img/svg/flags/fr.svg' }
    ];
    this.sessionLanguage();
    this.headerTitleService.setHeaderTitleOnReturn();
    this.headerTitleService.setHeaderTitleOnRefresh();
  }

  /**
   * Make selected language persistent even after refresh
   */
  private sessionLanguage(): void {
    switch (this.cookieService.getCookie('language')) {
      case 'eng':
        this.selectLang(this.supportedLanguages[0].value, this.supportedLanguages[0].flag);
        break;
      case 'fra':
        this.selectLang(this.supportedLanguages[1].value, this.supportedLanguages[1].flag);
        break;
      default:
        this.selectLang(this.supportedLanguages[0].value, this.supportedLanguages[0].flag);
        break;
    }
  }

  /**
   * Check if the selected lang is current lang
   *
   * @param {string} lang
   * @returns {boolean}
   */
  public isCurrentLang(lang: string): boolean {
    return lang === this.translate.currentLang;
  }

  /**
   * Select a lang and set its flag as default
   *
   * @param {string} lang
   * @param {string} flag
   */
  public selectLang(lang: string, flag: string): void {
    this.translate.use(lang);
    this.currentFlag = flag;
    this.cookieService.setCookie('language', lang, 7);
  }

  /**
   * Update title in tab and in page header
   * Specify the page has changed with a flag to trigger the transition
   *
   * @param {string} newTitle
   * @returns {string}
   */
  public setTitle(newTitle: string): string {
    this.pageHasChanged = !this.pageHasChanged; // make disappear previous title
    setTimeout(() => this.pageHasChanged = !this.pageHasChanged, 500); // make appear new title with delay

    return this.headerTitleService.setTitle(newTitle); // dynamic tab title
  }

  /**
   * Toggle the class .font-big to body to increase or reduce font size across the app
   */
  public changeFont(): void {
    const body = document.getElementsByTagName('body')[0];

    this.fontHasChanged ?
      this.renderer.removeClass(body, 'font-big') : this.renderer.addClass(body, 'font-big');

    this.fontHasChanged = !this.fontHasChanged;
  }

  /**
   * Detect if device is iOS to trigger specific UI changes and accessibility features
   *
   * @returns {boolean}
   */
  public isIos(): boolean {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/iPad|iPhone|iPod/.test(userAgent)) {
      return true;
    }
  }

  /**
   * For iOS
   * Go back to the previous page
   */
  public goBack(): void {
    this.location.back();
  }

}
