import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YearService {
  selectedYear$: Observable<number>;
  years: number[] = [2018];
  private _selectedYear = new BehaviorSubject<number>(2018);

  constructor() {
    this.selectedYear$ = this._selectedYear.asObservable();
   }

  setYear(year: number) {
    this._selectedYear.next(year);
  }

}
