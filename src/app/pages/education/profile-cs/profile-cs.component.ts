import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-cs',
  templateUrl: './profile-cs.component.html',
  styleUrls: ['./profile-cs.component.scss']
})
export class ProfileCsComponent {

  @Input() public profile: any;
  @Input() public certifs: any;

  constructor() {  }

}
