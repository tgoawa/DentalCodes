import { Component, OnChanges, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { PracticeList, PracticeRegionTableDTO, PracticeRegionCode, PracticeInfo } from '../models/practice-list.model';
import { YearService } from '../services/year.service';
import { DataService } from '../services/data.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-dental-practice-list',
  templateUrl: './dental-practice-list.component.html',
  styleUrls: ['./dental-practice-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DentalPracticeListComponent implements OnChanges {
  @Input() practiceList: PracticeList[];
  @Input() title: string;
  @Output() practiceInfo: EventEmitter<PracticeInfo> = new EventEmitter();
  practiceName: string;
  showPracticeList = true;
  showCodesTable = false;
  newSurveyYear: number;
  selectedYear: number;

  constructor(private yearService: YearService, private dataService: DataService) { }

  ngOnChanges() {
    this.yearService.selectedYear$.subscribe(data => this.selectedYear = data);
  }

  onPracticeSelected(event: PracticeInfo) {
    this.practiceInfo.emit(event);
  }

}
