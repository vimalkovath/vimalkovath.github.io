import { Injectable } from '@angular/core';
/* DATA */
import { HOBBIES } from '../../shared/data/mock-hobbies';

@Injectable({
  providedIn: 'root'
})
export class HobbyService {

  constructor() { }

  public getHobbies(): any {
    return HOBBIES;
  }

}
