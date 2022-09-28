import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingModule } from './landing/landing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LandingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterTestingModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, LoginComponent, LogoutComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
