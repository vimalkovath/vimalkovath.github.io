import { Injectable } from '@angular/core';
// Data
import { SKILLS } from '../../shared/data/mock-skills';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }
  public getSkills(): any {
    return SKILLS;
  }

}
