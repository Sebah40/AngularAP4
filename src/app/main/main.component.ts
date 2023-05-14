import { Component, OnInit } from '@angular/core';
import { persona } from '../model/persona.model';
import { PersonaService } from '../service/persona.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  persona: persona = new persona("", "", "", "");
  
  constructor(public personaService: PersonaService, private tokenService: TokenService) { }
  isLogged = false;
  
  ngOnInit(): void {
    this.personaService.getPersona().subscribe((data: persona) => { this.persona = data });
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
}