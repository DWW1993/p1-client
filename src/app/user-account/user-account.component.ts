import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { IChirp } from '../chirpInterface';
import { IUser } from '../userInterface';
import { UserService } from '../services/user.service';
import { ChirpService } from '../services/chirp.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {
  users: any;

  constructor(
    private svc: ChirpService,
    private userSvc: UserService,
  ) { }

  getUsers(): void {
    this.userSvc.getUsers()
      .subscribe((response) => this.users = response);
    }

  ngOnInit() {
    this.getUsers();
  }

}
