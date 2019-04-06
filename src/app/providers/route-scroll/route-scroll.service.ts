import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteScrollService {

  constructor(private router: Router) { }

  /**
   * When navigating on a new page -> scroll to the top of the page
   */
  public scrollTopNav(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }

      document.getElementById('anchor-top')
        .scrollIntoView({block: 'start', behavior: 'smooth'});
    });
  }

}
