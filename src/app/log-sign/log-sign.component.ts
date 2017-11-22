import { Component, OnInit, Input } from '@angular/core';
import { MatButtonToggleModule, MatButtonToggle } from '@angular/material';

import { LoginComponent } from "../login/login.component";
import { SignupComponent } from "../signup/signup.component";

@Component({
  selector: 'app-log-sign',
  templateUrl: './log-sign.component.html',
  styleUrls: ['./log-sign.component.scss']
})
export class LogSignComponent implements OnInit {

  constructor(private LoginComponent: LoginComponent) { }

  ngOnInit() {
  }

}
