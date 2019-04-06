import { Injectable } from '@angular/core';
// Data
import { TOOLS } from '../../shared/data/mock-tools';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  constructor() { }

  public getTools(): any {
    return TOOLS;
  }

}
