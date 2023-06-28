import { Component, HostListener, OnInit } from '@angular/core';
import { ContactService } from '../service/contact-service';
import { Contact } from '../model/contact';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit{
  contact: Contact[] = [];

  constructor(private contactService: ContactService, private tokenService: TokenService) {}
  isLogged =  false;

  ngOnInit(): void {
    this.loadContacts();
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadContacts(): void {
    this.contactService.lista().subscribe(data => {this.contact = data;})
  }

  delete(id?: number) {
    if (id != undefined) {
      this.contactService.delete(id).subscribe(
        data => {
          this.loadContacts();
        }, err => {
          alert("Could not delete");
        }
      )
    }
  }
}
