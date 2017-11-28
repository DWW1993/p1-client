import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { ChirpFormComponent } from './chirp-form/chirp-form.component';
import { SignupComponent } from './signup/signup.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { FollowersComponent } from './followers/followers.component';
import { UsersComponent } from "./users/users.component";

const appRoutes: Routes = [
  {
    path: '',
    component: SignupComponent
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
    path: 'user',
    component: UserAccountComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'followers',
    component: FollowersComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
];

  @NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
