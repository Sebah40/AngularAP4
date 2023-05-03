import { Component, OnInit } from '@angular/core';
import { educacion } from '../model/educacion.model';
import { EducacionService } from '../service/educacion.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educacion: educacion = new educacion("","","","","");
  constructor(public educacionService: EducacionService) {}

  ngOnInit(): void {
    this.educacionService.getEducacion().subscribe((data: educacion) => {this.educacion = data});
  }
}
