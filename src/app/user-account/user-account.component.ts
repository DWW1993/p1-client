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
<<<<<<< Updated upstream
  @Input() user: IUser;

  constructor(
    private chirpService: ChirpService,
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
=======
  users: any;
  chirps:any

  constructor(
    private chirpService: ChirpService,
    private userSvc: UserService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
>>>>>>> Stashed changes
  ) { }

  // getUsers(): void {
  //   this.userService.getUsers()
  //     .subscribe((response) => this.users = response);
  // }

  ngOnInit() {
<<<<<<< Updated upstream
      this.userService.me(true)
        .then((user: IUser) => {
          this.user = user;
        });     
=======
    this.getUsers();
    this.getChirps();
  }



  openSingle(chirp): void {
    let dialogRef = this.dialog.open(SinglePopupComponent, {
      width: '40em',
      height: '400px',
      data: { 
        handle: chirp.handle,
        username: chirp.username,
        message: chirp.message,
        id: chirp.id
      }
    });
>>>>>>> Stashed changes
  }

  getChirps(): void {
    this.chirpService.getChirps()
      .subscribe((response) => this.chirps = response);
    }


}
