import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { iChirp } from './chirpInterface';
import { ChirpService } from './services/chirp.service';
import { ChirpFormComponent } from './chirp-form/chirp-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Group Chirper';
}
