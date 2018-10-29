import { Component, OnChanges, Input } from '@angular/core';
import { PracticeRegionCode, PracticeRegionTableDTO } from '../models/practice-list.model';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-practice-codes',
  templateUrl: './practice-codes.component.html',
  styleUrls: ['./practice-codes.component.css']
})
export class PracticeCodesComponent implements OnChanges {
  @Input() practiceRegionCode: PracticeRegionCode;
  @Input() title: string;
  practiceRegionTableDTO: any[];
  constructor() { }

  ngOnChanges() {
    this.createPracticeRegionTableDTO(this.practiceRegionCode);
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
