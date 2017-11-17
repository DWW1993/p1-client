import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { ChirpFormComponent } from './chirp-form/chirp-form.component';
import { SingleComponent } from './single/single.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'chirp-form',
    component: ChirpFormComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'single/:id',
    component: SingleComponent
  }
];

  @NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
