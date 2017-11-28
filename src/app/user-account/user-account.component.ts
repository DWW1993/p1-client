import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';

import { IChirp } from '../chirpInterface';
import { IUser } from '../userInterface';
import { UserService } from '../services/user.service';
import { ChirpService } from '../services/chirp.service';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SinglePopupComponent } from '../single-popup/single-popup.component';


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

  // getChirps(): void {
  //   this.chirpService.getChirps()
  //     .subscribe((response) => this.chirps = response);
  //   }


}
