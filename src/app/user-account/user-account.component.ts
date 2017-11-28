import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';

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
  @Input() user: IUser;

  constructor(
    private chirpService: ChirpService,
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  // getUsers(): void {
  //   this.userService.getUsers()
  //     .subscribe((response) => this.users = response);
  // }

  ngOnInit() {
      this.userService.me(true)
        .then((user: IUser) => {
          this.user = user;
        });     
  }

}
