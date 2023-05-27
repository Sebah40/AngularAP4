import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../model/contact';
import { ContactService } from '../service/contact-service';
import { TokenService } from '../service/token.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  email: string;
  message: string;
  isLogged: boolean = false;

  constructor(private contactoS: ContactService, private router: Router, private tokenService: TokenService) {  }

  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onCreate(): void {
    const contact = new Contact(this.email, this.message);
    this.contactoS.save(contact).subscribe(
      data => {
        alert("Message sent");
      }, err => {
        alert("Error sending");
      }
    )
  }
}
