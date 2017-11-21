import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { ChirpService } from '../services/chirp.service';

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
    private svc: ChirpService
  ) {
    this.form = this.fb.group ({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
   }

  ngOnInit() {
  }

  spGetChirp() {
    const newChirp = (this.form.value);
    this.svc.createChirp(newChirp)
    .subscribe();
  }
}
