import { Component, OnChanges, Input, ChangeDetectionStrategy } from '@angular/core';
import { PracticeRegionTableDTO } from '../models/practice-list.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-practice-codes-table',
  templateUrl: './practice-codes-table.component.html',
  styleUrls: ['./practice-codes-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PracticeCodesTableComponent implements OnChanges {
  @Input() dataSource: PracticeRegionTableDTO[];
  practiceRegionData: MatTableDataSource<PracticeRegionTableDTO>;
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
    this.practiceRegionData = new MatTableDataSource<PracticeRegionTableDTO>(this.dataSource);
    console.log(this.practiceRegionData);
  }

}
