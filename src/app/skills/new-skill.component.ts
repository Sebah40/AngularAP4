import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from '../model/skill';
import { SkillService } from '../service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private skillS: SkillService, private router: Router) {

  }
  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skill(this.nombre, this.porcentaje);
    this.skillS.save(skill).subscribe(
      data => {
        alert("Skill saved successfully");
        this.router.navigate(['']);
      }, err => {
        alert("Error saving");
        this.router.navigate(['']);
      }
    )
    }
  }
