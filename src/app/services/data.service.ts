import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data = new Subject<number>();
  data$ = this.data.asObservable().pipe(
    map(x => x * 10)
  );

  constructor() { }

  dataNext(value: number) {
    this.data.next(value);
  }
}
