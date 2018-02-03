import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})

export class HomeComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
        this.authService.logout();
      }

}
