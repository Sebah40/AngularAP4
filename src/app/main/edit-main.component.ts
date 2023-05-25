import { Component, OnInit } from '@angular/core';
import { persona } from '../model/persona.model';
import { PersonaService } from '../service/persona.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-main',
  templateUrl: './edit-main.component.html',
  styleUrls: ['./edit-main.component.css']
})
export class EditMainComponent implements OnInit {
  person: persona = null;

  constructor(private personaS: PersonaService, private activatedRouter: ActivatedRoute, private router: Router) {}
  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaS.getPersona().subscribe(data => {
    this.person = data;
    }, err => {
      alert("Error updating");
      this.router.navigate(['']);
    }
    )
  }



  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaS.update(this.person).subscribe(data => {
      this.router.navigate(['']);
    }, err => {alert("Error updating");
      this.router.navigate(['']);
      }
    )
  }
}
