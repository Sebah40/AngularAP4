import { Component, OnInit } from '@angular/core';
import { persona } from '../model/persona.model';
import { PersonaService } from '../service/persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from '../service/image.service';

@Component({
  selector: 'app-edit-main',
  templateUrl: './edit-main.component.html',
  styleUrls: ['./edit-main.component.css']
})
export class EditMainComponent implements OnInit {
  person: persona = null;

  constructor(private personaS: PersonaService, private activatedRouter: ActivatedRoute, private router: Router, public imageService: ImageService) {}
  
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

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "profile_" + id;
    this.imageService.uploadImage($event, name);
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
