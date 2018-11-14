import { Component, OnChanges, Input, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { PracticeRegionTableDTO, Practice, PracticeRegionTableDTOExport } from 'src/app/models/practice-list.model';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

@Component({
  selector: 'app-practice-codes-table',
  templateUrl: './practice-codes-table.component.html',
  styleUrls: ['./practice-codes-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PracticeCodesTableComponent implements OnChanges {
  @Input() dataSource: PracticeRegionTableDTO[];
  @Input() practiceInformation: Practice;
  firstYear; secondYear; thirdYear: number;
  practiceRegionData: MatTableDataSource<PracticeRegionTableDTO>;
  displayedColumns = [
    'DentalCode',
    'FirstYearEnteredValue',
    'FirstYearRegionAverage',
    'EnteredValueDifference',
    'SecondYearEnteredValue',
    'SecondYearRegionAverage',
    'ThirdYearEnteredValue',
    'ThirdYearRegionAverage',
  ];
  toolTipText: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() {}

  ngOnChanges() {
    this.practiceRegionData = new MatTableDataSource<PracticeRegionTableDTO>(this.dataSource);
    this.practiceRegionData.paginator = this.paginator;
    this.practiceRegionData.sort = this.sort;
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
      headers: ['Dental Code', 'Code Description', 'Value ' + this.firstYear, 'Region Average ' + this.firstYear, 'Change Differential', 'Value ' + this.secondYear, 'Region Average ' + this.secondYear, 'Value ' + this.thirdYear, 'Region Average' + this.thirdYear]
    };
    // tslint:disable-next-line:no-unused-expression
    new Angular5Csv(this.setExportData(), 'Practice Details', options);
  }

  private setExportData(): PracticeRegionTableDTOExport[] {
    const tempArray = [];
    for (const object of this.dataSource) {
      // tslint:disable-next-line:max-line-length
      tempArray.push(new PracticeRegionTableDTOExport(object.DentalCode, object.CodeDescription, object.FirstYearEnteredValue, object.FirstYearRegionAverage, object.EnteredValueDifference, object.SecondYearEnteredValue, object.SecondYearRegionAverage, object.ThirdYearEnteredValue, object.ThirdYearRegionAverage));
    }

    return tempArray;

  }
}
