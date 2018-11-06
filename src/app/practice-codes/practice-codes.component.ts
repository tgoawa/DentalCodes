import { Component, OnChanges, Input, ChangeDetectionStrategy } from '@angular/core';
import { PracticeRegionCode, PracticeRegionTableDTO, Practice } from '../models/practice-list.model';

@Component({
  selector: 'app-practice-codes',
  templateUrl: './practice-codes.component.html',
  styleUrls: ['./practice-codes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PracticeCodesComponent implements OnChanges {
  @Input() dataSource: PracticeRegionCode;
  @Input() title: string;
  practiceInformation: Practice;
  practiceRegionTableDTO: any[];
  constructor() { }

  ngOnChanges() {
    this.createPracticeRegionTableDTO(this.dataSource);
    this.practiceInformation = new Practice(this.title,
      this.dataSource.RegionName,
      this.dataSource.Address,
      this.dataSource.City,
      this.dataSource.State,
      this.dataSource.ZipCode);
  }

   private createPracticeRegionTableDTO(practiceRegionCodes: PracticeRegionCode) {
    this.practiceRegionTableDTO = [];
    if (practiceRegionCodes.FirstYear.length > 0) {
      for (let index = 0; index < practiceRegionCodes.FirstYear.length; index++) {
        this.practiceRegionTableDTO.push(
          new PracticeRegionTableDTO(
            practiceRegionCodes.FirstYear[index].DentalCodeId,
            practiceRegionCodes.FirstYear[index].DentalCode,
            practiceRegionCodes.FirstYear[index].CodeDescription,
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
