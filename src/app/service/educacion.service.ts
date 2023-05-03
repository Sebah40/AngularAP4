import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { educacion } from '../model/educacion.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL = 'http://192.168.1.13:8080/educacion/';

  constructor(private http: HttpClient) { }
    public getEducacion() : Observable<educacion>{
      return this.http.get<educacion>(this.URL+'traer/perfil');
    }
}
