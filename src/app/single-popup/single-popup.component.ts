import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';

@Component({
  selector: 'app-single-popup',
  templateUrl: './single-popup.component.html',
  styleUrls: ['./single-popup.component.scss']
})
export class SinglePopupComponent {

  constructor(public dialog: MatDialog) { }

  openSingle() {
    // this.dialog.open(!place!holder! {
    //   data: {
    //     animal: 'panda'
    //   }
    // });
  }

}
