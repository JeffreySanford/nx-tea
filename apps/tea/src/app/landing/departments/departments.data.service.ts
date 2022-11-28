import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Tea } from '@tea/api-interfaces';
@Injectable({
  providedIn: 'root',
})
export class DepartmentsDataService {
  subject$ = new Subject<Tea>;
  constructor(private http: HttpClient) {}

  getDepartments(): Observable<any> {
  
    this.http.get<any>('/api/departments').subscribe(
      (data)=>{
        this.subject$.next(data);
      },
      (error)=>{
        debugger
        this.subject$.error(error);
      },
      (complete: void)=>{
        console.log('complete');
      });

    return this.subject$;
  }

  saveDepartment(req: any): Observable<any> {
    return this.http.post('/api/departments', req);
  }
}