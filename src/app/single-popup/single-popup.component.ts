import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material';
import { Router, ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

import { ListComponent } from '../list/list.component';
import { ChirpService } from "../services/chirp.service";

@Component({
  selector: 'app-single-popup',
  templateUrl: './single-popup.component.html',
  styleUrls: ['./single-popup.component.scss']
})
export class SinglePopupComponent {
  chirps: any;

  constructor(
    public dialogRef: MatDialogRef<ListComponent>, 
    private chirpService: ChirpService, 
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  refresh(): void {
    window.location.reload();
}

  deleteChirp(): void {
    this.chirpService.deleteChirp(this.data.id)
      .subscribe(() => {

      })
  }
}
