import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  URL = 'https://apsh.onrender.com/contacto/'
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(this.URL + 'lista');
  }
  public save(mensage: Contact): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', mensage);
  }
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
  public details(id: number): Observable<Contact> {
    return this.httpClient.get<Contact>(this.URL + `detail/${id}`)
  }
}