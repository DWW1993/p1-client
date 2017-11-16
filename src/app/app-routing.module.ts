import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { ChirpFormComponent } from './chirp-form/chirp-form.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  ];
   
  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}