import { Component, OnInit, Output } from '@angular/core';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


import { ChirpService } from '../services/chirp.service';
import { IChirp } from '../chirpInterface';
import { SinglePopupComponent } from '../single-popup/single-popup.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  chirps: any;
  name: string;

  constructor(
    private chirpService: ChirpService, 
    public dialog: MatDialog
  ) { }

  openSingle(chirp): void {
    let dialogRef = this.dialog.open(SinglePopupComponent, {
      width: '300px',
      height: '400px',
      data: { 
        handle: chirp.handle,
        username: chirp.username,
        message: chirp.message 
      }
    });
  }

  getChirps(): void {
    this.chirpService.getChirps()
      .subscribe((response) => this.chirps = response);
    }

  ngOnInit(): void {
    this.getChirps();
    }
  }

