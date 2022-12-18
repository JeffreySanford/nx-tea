import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  error(msg :string){
    console.log(msg)
  }

  log(request: HttpRequest<any>) {
    console.log('Request holds: ' + request.method + ' - ' + request.urlWithParams)
  }
}
