import { Component, OnChanges, ChangeDetectionStrategy, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-dental-practice-table',
  templateUrl: './dental-practice-table.component.html',
  styleUrls: ['./dental-practice-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DentalPracticeTableComponent implements OnChanges {
  @Input() dataSource: any[];
  @Input() title: string;
  practiceList: MatTableDataSource<any>;
  displayedColumns = [
    'PracticeName'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }

  ngOnChanges() {
    this.practiceList = new MatTableDataSource<any>(this.dataSource);
    this.practiceList.paginator = this.paginator;
  }

}
