import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

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
    });
  }

  ngOnInit(): void {
  }

  randomId(): number {
    return Math.floor(Math.random() * 10000);

  }

  createChirp(userId: number, message: string): void {
    const id = this.randomId()
    let newChirp = (this.form.value)
    console.log(newChirp)
    this.chirpService.createChirp(newChirp)
      .subscribe(id => {
        newChirp.id = id
        this.router.navigate(['/list']);
        console.log('chirp sent')
      })
  };

}
