import { Injectable } from '@angular/core';

@Injectable()

export class BusyService {

  constructor() { }

  increment(msg: string) {
    console.log(msg);
  }

  decrement() {
    console.log('Busy cleared');
  }
}
