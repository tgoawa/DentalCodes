import { Component, OnChanges, ChangeDetectionStrategy, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { PracticeList } from 'src/app/models/practice-list.model';
import { YearService } from 'src/app/services/year.service';

@Component({
  selector: 'app-dental-practice-table',
  templateUrl: './dental-practice-table.component.html',
  styleUrls: ['./dental-practice-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DentalPracticeTableComponent implements OnChanges {
  @Input() dataSource: PracticeList[];
  @Input() title: string;
  selectedYear: number;
  practiceList: MatTableDataSource<any>;
  displayedColumns = [
    'PracticeName',
    'CodeDifference',
    'IsSchenckClient'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private yearService: YearService) { }

  ngOnChanges() {
    this.yearService.selectedYear$.subscribe(data => this.selectedYear = data);
    this.practiceList = new MatTableDataSource<any>(this.dataSource);
    this.practiceList.sort = this.sort;
    this.practiceList.paginator = this.paginator;
  }

}
