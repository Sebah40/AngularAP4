import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { persona } from '../model/persona.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
URL = 'http://192.168.1.13:8080/personas/';

  constructor(private http: HttpClient) { }

  public getPersona() : Observable<persona>{
    return this.http.get<persona>(this.URL+'traer/perfil');
  }
}
