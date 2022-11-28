import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsComponent } from './departments.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    DepartmentsComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule

  ]
})
export class DepartmentsModule { }
