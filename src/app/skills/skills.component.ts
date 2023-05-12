import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  scrollVariable: number = 0;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = scrollTop + windowHeight / 2;
    const maxScroll = documentHeight - windowHeight;
    const scrollPercentage = (scrollPosition / maxScroll) * 100;

    this.scrollVariable = Math.min(scrollPercentage, 40);
  }
}