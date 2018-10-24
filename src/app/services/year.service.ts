import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YearService {
  years: number[] = [2018];
  constructor() { }
}
