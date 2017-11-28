import { Component, OnInit } from '@angular/core';

import { UserService } from "../services/user.service";
import { IUser } from "../userInterface";
import { FollowersService } from "../services/followers.service";

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {
  user: any;
  followingChirps: any;

  constructor(
    private userService: UserService,
    // private followersService: FollowersService
  ) {}

  ngOnInit() {
    this.userService.me(true)
    .then((user: IUser) => {
      this.user = user;
    });
    console.log(this.user);
    // this.followersService.getFollowingChirps(this.user.id)
  //   .subscribe((response) => {
  //     this.followingChirps = response
  //     console.log(this.followingChirps)
  //   });  
   }

}
