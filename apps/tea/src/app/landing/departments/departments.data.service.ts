import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Tea } from '@tea/api-interfaces';
import { environment } from 'apps/tea/src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DepartmentsDataService {
  subject$ = new Subject<Tea>;
  constructor(private http: HttpClient) {}

  getDepartments(): Observable<any> {
    const api = environment.apiUrl;
    this.http.get<any>(api + 'api/departments').subscribe(
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