import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from '../../../providers/cookie/cookie.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() public profile: any;
  public age: any;
  public profileBtn: Array<any> = [{
    name: 'homeBtn0',
    route: '../about',
    href: '',
    class: 'btn btn-primary',
    fragment: 'about-fed'
  },
  {
    name: 'homeBtn1',
    route: '../about',
    href: '',
    class: 'btn btn-primary',
    fragment: 'about-ux'
  },
  {
    name: 'homeBtn2',
    route: '../projects',
    href: '',
    class: 'btn btn-primary',
    fragment: null
  }];

  constructor(private cookieService: CookieService) { }

  public ngOnInit() {
    const today = Date.now();
    const birthday = new Date('1989-01-10');

    const ageDate = new Date(today - birthday.getTime());
    this.age = Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  /**
   * Make selected language persistent even after refresh
   */
  public sessionBtn(): string {
    return this.cookieService.getCookie('language');
  }

}
