import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http: HttpClient) { }

  getData(token?: string): Observable<any> {
    const params = new HttpParams().set('token', token);
    return this._http.get<any>(`${environment.urlJson}`, {params: params});
  }
  getPokemons(): Observable<any> {
    return this._http.get<any>(environment.pokemonApi);
  }
}
