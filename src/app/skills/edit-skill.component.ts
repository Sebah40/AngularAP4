import { Component, OnInit } from '@angular/core';
import { Skill } from '../model/skill';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillService } from '../service/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skill: Skill = null;
  constructor(
    private activatedRouter: ActivatedRoute,
    private skillS: SkillService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.detail(id).subscribe(
      data => {
        this.skill = data;
      }, err => {
        alert("Couldn't update")
      }
    )
  }
  onUpdate() {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.update(id, this.skill).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error updating");
      this.router.navigate(['']);
    }
    )
  }
}
