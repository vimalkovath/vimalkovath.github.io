import { Component, OnInit } from '@angular/core';
// Projects
import { Project } from '../../interfaces/project.interface';
import { ProjectService } from '../../providers/project/project.service';
// Skills
import { Skill } from '../../interfaces/skill.interface';
import { SkillService } from '../../providers/skill/skill.service';
// Constants
import { PROFILE } from '../../shared/constants/profile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public profile = PROFILE;
  public projects: Array<Project>;
  public skills: Array<Skill>;

  constructor(private projectService: ProjectService,
              private skillService: SkillService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects() || [];
    this.skills = this.skillService.getSkills() || [];
  }

}
