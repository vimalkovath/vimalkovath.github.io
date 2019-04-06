import { Injectable } from '@angular/core';
/* MODELS */
import { PROJECTS } from '../../shared/data/mock-projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  public getProjects(): any {
    return PROJECTS;
  }

}
