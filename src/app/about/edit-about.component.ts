import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from '../model/persona.model';
import { PersonaService } from '../service/persona.service';
@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {
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