import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  urlJson = './assets/json/referenceRules.json';

  constructor(private _http: HttpClient) { }

  getJson(): Observable<any> {
    return this._http.get<any>(this.urlJson);
  }
}
