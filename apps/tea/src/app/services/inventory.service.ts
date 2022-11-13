import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Tea } from '@tea/api-interfaces';
import { map, Observable, Subject, Subscription } from 'rxjs';
import { Db, WithId } from 'mongodb';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  inventory: Tea[] = [];

  constructor(
    @Inject('DATABASE_CONNECTION')
    private db: Db
  ) {
  }

  getInventory(): Subject<Tea[]> {
    debugger
    let teas: Array<Tea>;
    const teaInventory$ = new Subject<Array<Tea>>();
     const inventorySubject$ = this.db.collection('Teas').find().toArray().then((docs) => {
      debugger
      docs.forEach((doc) => {
        debugger
      })

      // const teas: Array<Tea> = docs
      return teaInventory$.next(teas)
    });

    return teaInventory$;


    // this.http.get<Array<Tea>>(DATABASE), { withCredentials: true }).subscribe((teasPromise: Tea[]) => {
    //   teaInventory$.next(teasPromise)
    //   debugger
    // });

    // return teaInventory$;
  }
}