import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LandingComponent } from './landing.component';
import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';
import { StageComponent } from './stage/stage.component';
import { AdministrationComponent } from './administration/administration.component';
import { AuthenticationComponent } from './authentication/authentication.component';

import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    SidebarContentComponent,
    StageComponent,
    LandingComponent,
    SidebarContentComponent,
    AdministrationComponent,
    AuthenticationComponent

  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    MatBadgeModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatInputModule,
    RouterModule
  ],
  exports: [LandingComponent]
})
export class LandingModule { }
