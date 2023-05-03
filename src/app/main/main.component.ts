import { Component, OnInit } from '@angular/core';
import { persona } from '../model/persona.model';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  persona: persona = new persona("","","");
  constructor(public personaService: PersonaService) {}

  ngOnInit(): void {
    this.personaService.getPersona().subscribe((data: persona) => {this.persona = data});
  }
}
