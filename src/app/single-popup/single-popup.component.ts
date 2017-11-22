import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material';

import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-single-popup',
  templateUrl: './single-popup.component.html',
  styleUrls: ['./single-popup.component.scss']
})
export class SinglePopupComponent {

  constructor(
    public dialogRef: MatDialogRef<ListComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
