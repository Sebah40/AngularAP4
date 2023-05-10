import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged = false;

  showMenu: boolean = false;

  constructor(private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.isLogged = true;
  } else {
    this.isLogged = false;
  }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  login() {
    this.router.navigate(['/login']);
  }
}
