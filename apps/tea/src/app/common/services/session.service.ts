import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  username = "Sam"
  constructor() { }

  status() {
    return false;
  }
}

