import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../service/persona.service';
import { persona } from '../model/persona.model';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  persona: persona = new persona("","","","");

  constructor(public personaService: PersonaService, private tokenService: TokenService) {}
  isLogged = false;
  
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data});
    if(this.tokenService.getToken()) {
      this.isLogged = true;
  } else {
    this.isLogged = false;
  }
  }
}
