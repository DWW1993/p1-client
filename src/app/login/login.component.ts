import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { IUser } from '../userInterface';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private users: Array<IUser>=[]
  ) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      email: ['', Validators.required]
    });
   }

  ngOnInit() {
// this.userService.spGetUsers()
// .subscribe((response)=>this.users=response);

  }

}
