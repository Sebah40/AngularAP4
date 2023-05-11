import { Router } from "@angular/router";
import { Educacion } from "../model/educacion";
import { Component, OnInit } from "@angular/core";
import { EducacionService } from "../service/educacion.service";

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  habilidades: string = '';
  anio: string = '';
  nombre: string = '';
  descripcion: string = '';
  img: string = '';

  constructor(private educacionS: EducacionService, private router: Router) {}
  ngOnInit(): void {
    
  }
  onCreate(): void {
    const expe = new Educacion(this.nombre,this.descripcion,this.img, this.anio, this.habilidades);
    this.educacionS.save(expe).subscribe(data => {
      alert("Experience saved successfully");
      this.router.navigate(['']);
  }, err => {
    alert("Error");
    this.router.navigate(['']);
  }
  )
}
}
