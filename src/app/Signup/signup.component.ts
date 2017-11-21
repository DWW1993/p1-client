import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private svc: UserService
  ) { this.form = this.fb.group ({
      handle: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(30)])],
      username: ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.maxLength(30)])],
      password: ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
    });
   }

  ngOnInit() {
  }

  createUser() {
    const newUser = (this.form.value);
    this.svc.CreateUser(newUser)
    .subscribe();
  }

}
