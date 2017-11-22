import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';

import { UserService } from '../services/user.service';
import { IUser } from '../UserInterface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(private UserService: UserService) { }
  
  getUsers(): void {
    this.UserService.getUsers()
    .subscribe((response) => this.users = response);
  }

  ngOnInit() {
    this.getUsers();
  }


}
