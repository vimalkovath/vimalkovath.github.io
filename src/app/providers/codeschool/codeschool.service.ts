import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodeschoolService {

  constructor(private http: HttpClient) { }

  /**
   * No need to invoke map() to parse out the response. Method has been removed,
   * and we simply return the Observable. Default responseType is JSON,
   * so the response data is already parsed for us
   *
   * @param {string} id
   * @returns {Observable<any>}
   */
  public getCodeschoolProfile(): Observable<any> {
    // return this.http.get<any>('http://localhost:4200/data/mock-codeschool.json');
    return this.http.get<any>('https://vimalkovath.github.io/src/assets/data/mock-codeschool.json');
  }

}
