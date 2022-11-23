import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { LandingComponent } from './landing/landing.component';
import { AuthenticationGuard } from './authentication.guard';
import { DepartmentsComponent } from './departments/departments.component';

const routes: Routes = [
   { path: 'login', component: LoginComponent },
   { path: 'logout', component: LogoutComponent },
   { path: 'landing', component: LandingComponent, canActivate: [AuthenticationGuard]},
   { path: 'departments', component: DepartmentsComponent, canActivate: [AuthenticationGuard]},
   { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }