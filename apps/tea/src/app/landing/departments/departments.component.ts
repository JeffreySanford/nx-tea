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
  chartOptions?: any;
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
        debugger
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
    let series: Array<{ name: string, data: number }> = [];
    let departments: Array<string> = [];
    data.forEach((element: Department) => {
      if (element.studentcount) {
        console.log(element.department)
        departments.push(element.department);
        series.push({ name: element.department, data: element.studentcount })

        this.count.push(element.studentcount);
        console.dir(series)
      }
    });

    this.chartOptions = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Departments by Count',
        align: 'left'
      },
      subtitle: {
        text: 'Source: <a ' +
          'href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population"' +
          'target="_blank">Wikipedia.org</a>',
        align: 'left'
      },
      xAxis: {
        categories: departments,
        title: {
          text: null
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Employment Cost',
          align: 'middle'
        },
        labels: {
          overflow: 'justify'
        }
      },
      tooltip: {
        valueSuffix: ' millions'
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -60,
        y: 20,
        floating: true,
        borderWidth: 1,
        backgroundColor:
          Highcharts.defaultOptions.legend?.backgroundColor || '#FFFFFF',
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Year 1990',
        data: [631, 727]
      }, {
        name: 'Year 2000',
        data: [814, 841]
      }, {
        name: 'Year 2010',
        data: [1044, 944]
      }, {
        name: 'Year 2018',
        data: [1276, 1007]
      }]
    }
    debugger
  }
}