import { Component, OnInit } from '@angular/core';
import { ProyectsService } from '../service/proyects.service';
import { Router } from '@angular/router';
import { Proyecto } from '../model/proyecto';

@Component({
  selector: 'app-newprojects',
  templateUrl: './newprojects.component.html',
  styleUrls: ['./newprojects.component.css']
})
export class NewprojectsComponent implements OnInit {
  habilidades: string = '';
  anio: string = '';
  nombre: string = '';
  descripcion: string = '';
  img: string = '';
  url: string = '';

  constructor(private proyectoS: ProyectsService, private router: Router) {}
  ngOnInit(): void {
    
  }
  onCreate(): void {
    const expe = new Proyecto(this.nombre,this.descripcion,this.img, this.anio, this.habilidades, this.url);
    this.proyectoS.save(expe).subscribe(data => {
      alert("Project saved successfully");
      this.router.navigate(['']);
  }, err => {
    alert("Error");
    this.router.navigate(['']);
  }
  )
}
}