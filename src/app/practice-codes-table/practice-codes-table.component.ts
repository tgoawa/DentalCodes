import { Component, OnChanges, Input } from '@angular/core';
import { PracticeRegionCodeData } from '../models/practice-list.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-practice-codes-table',
  templateUrl: './practice-codes-table.component.html',
  styleUrls: ['./practice-codes-table.component.css']
})
export class PracticeCodesTableComponent implements OnChanges {
  @Input() dataSource: PracticeRegionCodeData[];
  practiceRegionData: MatTableDataSource<PracticeRegionCodeData[]>;
  displayedColumns = [
    'DentalCode',
    'FirstYearEnteredValue',
    'FirstYearRegionAverage',
    'SecondYearEnteredValue',
    'SecondYearRegionAverage',
    'ThirdYearEnteredValue',
    'ThirdYearRegionAverage',
    'EnteredValueDifference'
  ];

  constructor() { }

  ngOnChanges() {
  }

}
