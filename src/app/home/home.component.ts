import { Component, OnInit } from '@angular/core';

import { User } from '../core/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));

    if (!this.user?.configuration) {
      this.user.configuration = {
        showWelcomeMessage: true,
        showTest1: true,
        showTest2: true,
      };
    }
  }

}
