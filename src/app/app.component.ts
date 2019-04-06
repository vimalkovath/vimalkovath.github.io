import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// Services
import { RouteScrollService } from './providers/route-scroll/route-scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private scrollService: RouteScrollService) {}

  ngOnInit() {
    this.scrollService.scrollTopNav();
    // jQuery functions
    this.toggleLangList();
    this.toggleMenuResp();
    this.resetDropdowns();
  }

  /**
   * jQuery script
   * Fix non functional dropdown method from ngx
   * Event is not propagated to window
   *
   * When language btn is clicked -> open or close dropdown list
   */
  private toggleLangList() {
    $('.dropdown').on('click', function(e) {
      e.stopPropagation(); // avoid click to propagate to window
      $(this).hasClass('open') ?
        $(this).removeClass('open') : $(this).addClass('open');
    });
  }

  /**
   * jQuery script
   * Fix non functional collapse method from ngx
   * Event is not propagated to window
   *
   * When resp menu btn is clicked
   * -> open or close dropdown menu list
   * -> triggers close and open animation of burger button
   */
  private toggleMenuResp() {
    $('.btn-burger').on('click', function(e) {
      e.stopPropagation(); // avoid click to propagate to window

      if ($('.nav-menu').hasClass('in')) {
        $('.nav-menu').removeClass('in');
        $(this).addClass('collapsed');
      } else {
        $('.nav-menu').addClass('in');
        $(this).removeClass('collapsed');
      }
    });
  }

  /**
   * jQuery script
   * Fix non functional dropdown/collapse method from ngx
   *
   * Clicking anywhere in the which is not the burger menu or the list menu buttons
   * -> cancel all active dropdowns
   */
  private resetDropdowns() {
    $(window).on('click', function() {
      $('.dropdown').removeClass('open');
      $('.nav-menu').removeClass('in');
      $('.btn-burger').addClass('collapsed');
    });
  }

}
