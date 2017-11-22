import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { IChirp } from '../chirpInterface';
import { ChirpService } from '../services/chirp.service';
import { SinglePopupComponent } from '../single-popup/single-popup.component';
import { ListComponent } from '../list/list.component';

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
    private chirpService: ChirpService,
  ) { this.form = this.fb.group({
        userId: ['', Validators.required],
        message: ['', Validators.compose([Validators.required, Validators.maxLength(280)])],
    });
  }

  ngOnInit(): void {
  }

  createChirp(): void {
    let newChirp = (this.form.value)
    console.log(newChirp)
    this.chirpService.createChirp(newChirp)
      .subscribe(() => {
        this.router.navigate(['/list']);
        console.log('chirp sent')
      })
  };

}
