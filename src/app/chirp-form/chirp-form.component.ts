import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { IChirp } from '../chirpInterface';
import { ChirpService } from '../services/chirp.service';

@Component({
  selector: 'app-chirp-form',
  templateUrl: './chirp-form.component.html',
  styleUrls: ['./chirp-form.component.scss']
})
export class ChirpFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private chirpService: ChirpService
  ) {
    this.form = this.fb.group({
      message: ['', Validators.compose([Validators.required, Validators.maxLength(280)])],
      image: ['']
    });
  }

  ngOnInit(): void {
  }

  randomId(): number {
    return Math.floor(Math.random() * 10000);

  }

  public newChirp(handler: string, user: string, message: string): void {
    const id = this.randomId();
    const chirp = { id, handler, user, message };
    this.router.navigate(['/list']);
  }
}
