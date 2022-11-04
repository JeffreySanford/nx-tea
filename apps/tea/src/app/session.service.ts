import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SessionService {

  userName = "Sam"
  constructor() { }

  status() {
    return false;
  }
}

