import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { persona } from '../model/persona.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
URL = 'https://sebastian-back.onrender.com/personas/';

  constructor(private http: HttpClient) { }

  public getPersona() : Observable<persona>{
    return this.http.get<persona>(this.URL+'detail/1');
  }

  public update(person: persona): Observable<any>{
    return this.http.put<any>(this.URL + `update/1`, person);
  }
}
