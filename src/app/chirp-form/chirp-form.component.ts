import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { iChirp } from "../chirpInterface";
import { chirpService } from "../services/chirp.service";
import { ListComponent } from '../list/list.component';
import { SingleComponent } from "../single/single.component";

@Component({
  selector: 'app-chirp-form',
  templateUrl: './chirp-form.component.html',
  styleUrls: ['./chirp-form.component.scss']
})
export class ChirpFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
