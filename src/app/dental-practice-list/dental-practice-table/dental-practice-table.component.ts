import { Component, OnChanges, ChangeDetectionStrategy, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { PracticeList, PracticeInfo } from 'src/app/models/practice-list.model';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

@Component({
  selector: 'app-dental-practice-table',
  templateUrl: './dental-practice-table.component.html',
  styleUrls: ['./dental-practice-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DentalPracticeTableComponent implements OnChanges {
  @Input() dataSource: PracticeList[];
  @Input() title: string;
  @Output() practiceInfo: EventEmitter<PracticeInfo> = new EventEmitter();
  practiceList = new MatTableDataSource();
  displayedColumns = [
    'PracticeName',
    'CodeDifference',
    'ClientId'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnChanges() {
    this.practiceList = new MatTableDataSource<PracticeList>(this.dataSource);
    this.practiceList.sort = this.sort;
    this.practiceList.paginator = this.paginator;
  }

  applyFilter(value: string) {
    value = value.trim();
    value = value.toLocaleLowerCase();
    this.practiceList.filter = value;
  }

  onPracticeSelected(practiceId: number, practiceName: string) {
    this.practiceInfo.emit(new PracticeInfo(practiceId, practiceName));
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
      headers: ['Practice Name', 'Practice Id', 'Code Difference', 'Client Id']
    };
    // tslint:disable-next-line:no-unused-expression
    new Angular5Csv(this.dataSource, 'Practice List', options);
  }

}
