import { Component, OnInit } from '@angular/core';
// Skills
import { Skill } from '../../interfaces/skill.interface';
import { SkillService } from '../../providers/skill/skill.service';
// Tools
import { Tool } from '../../interfaces/tool.interface';
import { ToolService } from '../../providers/tool/tool.service';
// Hobbies
import { Hobby } from '../../interfaces/hobby.interface';
import { HobbyService } from '../../providers/hobby/hobby.service';
// Constants
import { PROFILE } from '../../shared/constants/profile';
// Services
import { ModalService } from '../../providers/modal/modal.service';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public details: any = PROFILE;
  public tools: Array<Tool>;
  public hobbies: Array<Hobby>;
  public skills: Array<Skill>;
  public skillsDev: Array<Skill> = [];
  public skillsDesign: Array<Skill> = [];
  public detailsModal: any = {};
  public typeModal: string;
  public bsModalRef: BsModalRef;

  constructor(private toolService: ToolService,
              private hobbyService: HobbyService,
              private skillService: SkillService,
              private modalService: ModalService) { }

  public ngOnInit() {
    this.tools = this.toolService.getTools() || [];
    this.hobbies = this.hobbyService.getHobbies() || [];
    this.skills = this.skillService.getSkills() || [];
    this.filterSkills(this.skills);
    this.scrollTo();
  }

  /**
   * window.location.hash retrieves the anchor
   * then scroll down to correct level
   */
  private scrollTo(): void {
    if (!!window.location.hash) {
      setTimeout(() => {
        document.querySelector(window.location.hash).scrollIntoView({
          block: 'nearest',
          inline: 'nearest',
          behavior: 'smooth'
        });
      }, 500);
    }
  }

  /**
   * Filters skills depending on whether or not they are associated to design or dev
   * @param {Skill} skills
   */
  private filterSkills(skills: Array<Skill>): void {
    for (const skill of skills) {
      if ((skill.category === 'Framework' || skill.category === 'Front-End') && skill.featured === true) {
        this.skillsDev.push(skill);
      } else if (skill.category === 'Design' && skill.featured === true) {
        this.skillsDesign.push(skill);
      }
    }
  }

  /**
   * Open modal
   * Resolve the item to display thanks to its id and type
   *
   * @param $event
   * @param type
   * @returns {any}
   */
  public openModal($event: any, type: string): any {
    this.typeModal = type;
    this.detailsModal = this.modalService.openModal($event, type);
  }

}
