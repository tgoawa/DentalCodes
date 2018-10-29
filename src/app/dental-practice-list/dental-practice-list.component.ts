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
  practiceName: string;
  showPracticeList = true;
  showCodesTable = false;
  selectedYear: number;
  practiceRegionCode: PracticeRegionCode;
  practiceRegionTableDTO: PracticeRegionTableDTO[];

  constructor(private yearService: YearService, private dataService: DataService) { }

  ngOnChanges() {
    this.yearService.selectedYear$.subscribe(data => this.selectedYear = data);
  }

  onPracticeSelected(event: PracticeInfo) {
    this.getPracticeCodesRegions(this.selectedYear, event);
  }

  private getPracticeCodesRegions(selectedYear: number, practiceInfo: PracticeInfo) {
    this.showCodesTable = true;
    this.practiceName = practiceInfo.PracticeName;
    this.dataService.getPracticeCodesRegions(selectedYear, practiceInfo.PracticeId)
    .subscribe((data: PracticeRegionCode) => {
      this.practiceRegionCode = data;
      this.createPracticeRegionTableDTO(this.practiceRegionCode);
      console.log(this.practiceRegionTableDTO);
    }, error => console.error(error));
  }

  private createPracticeRegionTableDTO(practiceRegionCodes: PracticeRegionCode) {
    this.practiceRegionTableDTO = [];
    if (!isNullOrUndefined(practiceRegionCodes)) {
      for (let index = 0; index < practiceRegionCodes.FirstYear.length; index++) {
        this.practiceRegionTableDTO.push(
          new PracticeRegionTableDTO(
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
            practiceRegionCodes.ThirdYear[index].SurveyYear
          )
        );
      }
    }
  }
}
