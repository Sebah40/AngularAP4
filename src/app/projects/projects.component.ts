import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../model/proyecto';
import { TokenService } from '../service/token.service';
import { ProyectsService } from '../service/proyects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  proyecto: Proyecto[] = [];

  constructor(private proyectoS : ProyectsService, private tokenService: TokenService) {}
  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();
    if(this.tokenService.getToken()) {
      this.isLogged = true;
  } else {
    this.isLogged = false;
  }
  }
  cargarProyectos(): void {
    this.proyectoS.lista().subscribe(
      data => {
        this.proyecto = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined ) {
      this.proyectoS.delete(id).subscribe(
        data => {
          this.cargarProyectos();
        }, err => {
          alert("Could not delete");
        }
      )
    }
  }
}