import { Injectable } from '@angular/core';
// Data
import { DIPLOMAS } from '../../shared/data/mock-diplomas';

@Injectable({
  providedIn: 'root'
})
export class DiplomaService {

  constructor() { }

  public getDiplomas(): any {
    return DIPLOMAS;
  }

}
