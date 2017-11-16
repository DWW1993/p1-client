import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { iChirp } from "./chirpInterface";
import { chirpService } from "./services/chirp.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Group Chirper';
}
