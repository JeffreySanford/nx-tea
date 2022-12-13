import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app.routing.module';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { AppHeaderComponent } from './common/header/header.component';
import { AppFooterComponent } from './common/footer/footer.component';

import { LandingModule } from './landing/landing.module';
import { BusyService } from './common/services/busy.service';
import { httpInterceptorProviders } from './common/interceptors';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { ToasterComponent } from './common/components/toaster/toaster.component';
import { DepartmentsModule } from './landing/departments/departments.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { RegisterComponent } from './login/register/register.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'
import { TokenStorageService } from './common/services/token-storage.service';

@NgModule({
  imports: [
    ToastrModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LandingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterTestingModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    DepartmentsModule,
    MatRippleModule,
    MatCardModule,
    MatSelectModule
  ],
  declarations: [
    AppHeaderComponent,
    LoginComponent,
    LogoutComponent,
    AppFooterComponent,
    AppComponent,
    ToasterComponent,
    RegisterComponent
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
    TokenStorageService,
    httpInterceptorProviders,
    BusyService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
