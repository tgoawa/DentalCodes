import { Component, OnChanges, ChangeDetectionStrategy, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { PracticeList, PracticeInfo } from 'src/app/models/practice-list.model';

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
  practiceList: MatTableDataSource<PracticeList>;
  displayedColumns = [
    'PracticeName',
    'CodeDifference',
    'IsSchenckClient'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnChanges() {
    this.practiceList = new MatTableDataSource<PracticeList>(this.dataSource);
    this.practiceList.sort = this.sort;
    this.practiceList.paginator = this.paginator;
  }

  onPracticeSelected(practiceId: number, practiceName: string) {
    this.practiceInfo.emit(new PracticeInfo(practiceId, practiceName));
  }

}
