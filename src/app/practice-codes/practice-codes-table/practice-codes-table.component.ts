import { Component, OnChanges, Input, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { PracticeRegionTableDTO } from 'src/app/models/practice-list.model';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

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
    this.practiceRegionData = new MatTableDataSource<PracticeRegionTableDTO>(this.dataSource);
    this.practiceRegionData.paginator = this.paginator;
    this.firstYear = this.dataSource[0].FirstSurveyYear;
    this.secondYear = this.dataSource[0].SecondSurveyYear;
    this.thirdYear = this.dataSource[0].ThirdSurveyYear;
  }

  exportToCSV() {
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      useBom: true,
      noDownload: false,
      // tslint:disable-next-line:max-line-length
      headers: ['Dental Code Id', 'Dental Code', 'First Year Value', 'First Year Region Avg', 'First Survey Year', 'Second Year Value', 'Second Year Region Avg', 'Second Survey Year', 'Third Year Value', 'Third Year Region Avg', 'Third Survey Year', 'Difference']
    };
    // tslint:disable-next-line:no-unused-expression
    new Angular5Csv(this.dataSource, 'Practice Details', options);
  }
}
