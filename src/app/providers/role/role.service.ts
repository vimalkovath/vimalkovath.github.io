import { Injectable } from '@angular/core';
// Data
import { ROLES } from '../../shared/data/mock-roles';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor() { }
  public getRoles(): any {
    return ROLES;
  }

}
