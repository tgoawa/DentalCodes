import { Component, OnChanges, Input, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { isNullOrUndefined } from 'util';
import { PracticeRegionCode, PracticeRegionTableDTO } from 'src/app/models/practice-list.model';

@Component({
  selector: 'app-practice-codes-table',
  templateUrl: './practice-codes-table.component.html',
  styleUrls: ['./practice-codes-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PracticeCodesTableComponent implements OnChanges {
  @Input() dataSource: PracticeRegionTableDTO[];
  @Input() title: string;
  firstYear; secondYear; thirdYear: number;
  practiceRegionData: MatTableDataSource<PracticeRegionTableDTO>;
  displayedColumns = [
    'DentalCode',
    'FirstYearEnteredValue',
    'FirstYearRegionAverage',
    'SecondYearEnteredValue',
    'SecondYearRegionAverage',
    'ThirdYearEnteredValue',
    'ThirdYearRegionAverage',
    'EnteredValueDifference',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {}

  ngOnChanges() {
    console.log(this.dataSource);
    this.practiceRegionData = new MatTableDataSource<PracticeRegionTableDTO>(this.dataSource);
    this.practiceRegionData.paginator = this.paginator;
    this.firstYear = this.dataSource[0].FirstSurveyYear;
    this.secondYear = this.dataSource[0].SecondSurveyYear;
    this.thirdYear = this.dataSource[0].ThirdSurveyYear;
  }
}
