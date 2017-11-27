import { Component, OnInit, Input } from '@angular/core';
import { Routes, ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
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
  @Input() users: any;

  constructor(
    private chirpService: ChirpService,
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  // getUsers(): void {
  //   this.userService.getUsers()
  //     .subscribe((response) => this.users = response);
  // }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.userService.getUser(<any>params.get('id')))
    .subscribe(user => this.users = user);
    console.log(this.users)
  }

}
