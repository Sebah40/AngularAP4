import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectsService } from '../service/proyects.service';
import { Proyecto } from '../model/proyecto';

@Component({
  selector: 'app-editprojects',
  templateUrl: './editprojects.component.html',
  styleUrls: ['./editprojects.component.css']
})
export class EditprojectsComponent implements OnInit {
  proyecto: Proyecto = null;

  constructor(private proyectoS: ProyectsService, private activatedRouter: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.details(id).subscribe(data => {
    this.proyecto = data;
    }, err => {
      alert("Error updating");
      this.router.navigate(['']);
    }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.update(id, this.proyecto).subscribe(data => {
      this.router.navigate(['']);
    }, err => {alert("Error updating");
      this.router.navigate(['']);
      }
    )
  }
}
