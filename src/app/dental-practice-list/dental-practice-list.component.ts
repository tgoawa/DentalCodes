import { Component, OnChanges, Input, ChangeDetectionStrategy } from '@angular/core';
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
  showPracticeList = true;
  showCodesTable = false;
  selectedYear: number;
  practiceRegionCodesData: PracticeRegionTableDTO[];

  constructor(private yearService: YearService, private dataService: DataService) { }

  ngOnChanges() {
    this.yearService.selectedYear$.subscribe(data => this.selectedYear = data);
  }

  onPracticeSelected(practiceInfo: PracticeInfo) {
    this.showPracticeList = false;
    this.getPracticeCodesRegions(this.selectedYear, practiceInfo);
  }

  private createPracticeRegionTableDTO(practiceRegionCodes: PracticeRegionCode, practiceName: string) {
    const tempArray = [];
    if (!isNullOrUndefined(practiceRegionCodes)) {
      for (let index = 0; index < practiceRegionCodes.FirstYear.length; index++) {
        tempArray.push(new PracticeRegionTableDTO(practiceName,
          practiceRegionCodes.FirstYear[index].DentalCodeId,
          practiceRegionCodes.FirstYear[index].DentalCode,
          practiceRegionCodes.FirstYear[index].EnteredValue,
          practiceRegionCodes.FirstYear[index].RegionAverageForCode,
          practiceRegionCodes.FirstYear[index].SurveyYear,
          practiceRegionCodes.SecondYear[index].EnteredValue,
          practiceRegionCodes.SecondYear[index].RegionAverageForCode,
          practiceRegionCodes.SecondYear[index].SurveyYear,
          practiceRegionCodes.ThirdYear[index].EnteredValue,
          practiceRegionCodes.ThirdYear[index].RegionAverageForCode,
          practiceRegionCodes.ThirdYear[index].SurveyYear));
      }
      return tempArray;
    } else {
      // No data returned from service display message to user
      return;
    }
  }

  private getPracticeCodesRegions(selectedYear: number, practiceInfo: PracticeInfo) {
    this.showCodesTable = true;
    this.dataService.getPracticeCodesRegions(selectedYear, practiceInfo.PracticeId)
    .subscribe((data: PracticeRegionCode) => {
      this.practiceRegionCodesData = this.createPracticeRegionTableDTO(data, practiceInfo.PracticeName);
      console.log(this.practiceRegionCodesData);
    }, error => console.error(error));
  }

}
