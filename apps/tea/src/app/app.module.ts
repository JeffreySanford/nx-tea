import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { AppRoutingModule } from './app.routing.module';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/header.component';
import { AppFooterComponent} from './footer/footer.component';

import { LandingModule } from './landing/landing.module';



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
  declarations: [
    AppHeaderComponent,
    AppComponent,
    LoginComponent,
    LogoutComponent,
    AppFooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
