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
    console.log(this.user);
  }

}
