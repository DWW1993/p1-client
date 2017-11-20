import { Component, OnInit, Output } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ChirpService } from '../services/chirp.service';
import { IChirp } from '../chirpInterface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})


export class ListComponent implements OnInit {
  chirps: any;

  constructor(private chirpService: ChirpService,
  ) { }


  getChirps(): void {
    this.chirpService.getChirps()
      .subscribe((response) => this.chirps = response);
    }

  ngOnInit(): void {
    this.getChirps();
    }
  }

