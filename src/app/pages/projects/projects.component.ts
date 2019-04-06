import { Component, OnInit } from '@angular/core';
// Projects
import { Project } from '../../interfaces/project.interface';
import { ProjectService } from '../../providers/project/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: Project[];
  public focusedItem: any;
  public filterValue = '';

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projects = this.projectService.getProjects();
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
