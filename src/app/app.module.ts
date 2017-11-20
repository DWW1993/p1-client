import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatMenuModule } from '@angular/material';
import {  MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatToolbarModule } from '@angular/material';
import { NgForOf } from '@angular/common';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SignupComponent } from './signup/signup.component';
import { ChirpFormComponent } from './chirp-form/chirp-form.component';
import { LoginComponent } from './login/login.component';
import { ChirpService } from './services/chirp.service';
import { AppRoutingModule } from './app-routing.module';
import { FormBuilder } from '@angular/forms/src/form_builder';
import { UserAccountComponent } from './user-account/user-account.component';
import { FollowersComponent } from './followers/followers.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SignupComponent,
    ChirpFormComponent,
    LoginComponent,
    UserAccountComponent,
    FollowersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatMenuModule
  ],
  providers: [
    ChirpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
