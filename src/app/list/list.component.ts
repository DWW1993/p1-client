import { Component, OnInit, Output } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ChirpService } from '../services/chirp.service';
import { IChirp } from '../chirpInterface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  chirps: IChirp[];

  constructor(private chirpService: ChirpService,
  ) { }


  getChirps(): void {
  }

  ngOnInit(): void {
    this.getChirps();
  }

}
