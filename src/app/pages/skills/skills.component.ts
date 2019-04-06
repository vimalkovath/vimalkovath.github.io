import { Component, OnInit } from '@angular/core';
// Skills
import { Skill } from '../../interfaces/skill.interface';
import { SkillService } from '../../providers/skill/skill.service';
// Services
import { ModalService } from '../../providers/modal/modal.service';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public skills: Skill[];
  public value = '';
  public detailsModal: any = {};
  public typeModal: string;
  public bsModalRef: BsModalRef;

  constructor(private skillService: SkillService,
              private modalService: ModalService) { }

  ngOnInit() {
    this.skills = this.skillService.getSkills();
  }

  /**
   * Affect the value to the filter
   * @param filter
   */
  public filterFor(filter: string): void {
    this.value = filter;
  }

  /**
   * Open modal
   * Resolve the item to display thanks to its id and type
   *
   * @param $event
   * @param {string} type
   * @returns {any}
   */
  public openModal($event: any, type: string): any {
    this.typeModal = type;
    this.detailsModal = this.modalService.openModal($event, type);
  }

}
