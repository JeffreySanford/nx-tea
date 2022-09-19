import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';
import { StageComponent } from './stage/stage.component';
import { MatIconModule } from '@angular/material/icon';

import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { LandingComponent } from './landing.component';

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
    LandingComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    MatBadgeModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatInputModule,
  ],
  exports: [LandingComponent]
})
export class LandingModule {}
