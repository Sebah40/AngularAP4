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
  scrollVariable: number = 0;

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
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = scrollTop + windowHeight / 4 ;
    const maxScroll = documentHeight - windowHeight;
    const scrollPercentage = (scrollPosition / maxScroll) * 110;
    this.scrollVariable = Math.min(scrollPercentage, 100);
  }
}