import { Component, HostListener, OnInit } from '@angular/core';
import { Skill } from '../model/skill';
import { TokenService } from '../service/token.service';
import { SkillService } from '../service/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skill: Skill[] = [];

  constructor(private skillS: SkillService, private tokenService: TokenService) {}
  isLogged =  false;

  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skillS.lista().subscribe(
      data => {
        this.skill = data;
      }
    )
  }

  delete(id: number): void {
    if(id != undefined) {
      this.skillS.delete(id).subscribe(
        data => {
          this.cargarSkills(); 
        }, err => {
          alert("Couldn't delete")
        }
      )
    }
  }
}