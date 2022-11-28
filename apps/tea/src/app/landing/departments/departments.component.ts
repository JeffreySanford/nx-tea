import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Department } from '@tea/api-interfaces';
import * as Highcharts from 'highcharts';
import { DepartmentsDataService } from './departments.data.service';

@Component({
  selector: 'broken-leaf-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
})
export class DepartmentsComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any;
  departments: any[] = [];
  count: any[] = [];
  addEntity = false;
  expandEntity = false;

  constructor(private departmentDataService: DepartmentsDataService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getDepartments();
  }

  expandDialog() {
    this.expandEntity = true;
    this.cd.detectChanges();
    debugger
  }
  getDepartments() {
    this.departmentDataService.getDepartments().subscribe(
      (data: Department[]) => {
        this.drawDepartments(data);
      }
    );
  }

  submit(department: any, count: any) {
    const obj = {
      department: department.value,
      studentcount: Number(count.value),
    };

    this.departmentDataService.saveDepartment(obj).subscribe((data: any) => {
      this.getDepartments();
    });
  }

  drawDepartments(data: any) {
    let series: Array<{name: string, data: number}> = [];
    data.forEach((element: Department) => {
      console.log(element.department)
      this.departments.push(element.department);
      series.push({name: element.department, data: element.studentcount})
  
      this.count.push(element.studentcount);
      console.dir(series)
    });

    this.chartOptions = {
      xAxis: {
        categories: this.departments,
      },
      series: [
        {
          name: 'Department',
          data: this.count,
        },
      ],
      chart: {
        type: 'bar',
      },
    };
  }
}
