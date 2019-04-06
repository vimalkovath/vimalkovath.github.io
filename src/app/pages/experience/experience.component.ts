import { Component, OnInit } from '@angular/core';
// Roles
import { Role } from '../../interfaces/role.interface';
import { RoleService } from '../../providers/role/role.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public roles: Role[];
  public focusedItem: any;
  public filterValue = '';

  constructor(private roleService: RoleService) {}

  ngOnInit() {
    this.roles = this.roleService.getRoles();
  }

  /**
   * Detect hovered item
   *
   * @param itemHovered
   */
  public focusItem(itemHovered: any): void {
    // focus will refer to the id of the selected item
    this.focusedItem = itemHovered;
  }

  /**
   * Capture the filter selected in filters component
   * Will be passed to list items component
   *
   * @param filter
   */
  public filterFor(filter: string): void {
    this.filterValue = filter;
  }

}
