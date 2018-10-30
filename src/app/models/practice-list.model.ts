export interface PracticeList {
  PracticeName: string;
  PracticeId: number;
  CodeDifference: number;
  IsSchenckClient: boolean;
  ClientId: number;
}

export interface PracticeDetail {
  DentalCodeId: number;
  DentalCode: string;
  EnteredValue: number;
  RegionAverageForCode: number;
  SurveyYear: number;
}

export class PracticeInfo {
  PracticeId: number;
  PracticeName: string;

  constructor(practiceId: number, practiceName: string) {
   this.PracticeId = practiceId;
   this.PracticeName = practiceName;
  }
}

export interface PracticeRegionCode {
  FirstYear: PracticeDetail[];
  SecondYear: PracticeDetail[];
  ThirdYear: PracticeDetail[];
}

export class PracticeRegionTableDTO {
  DentalCodeId: number;
  DentalCode: string;
  FirstYearEnteredValue: number;
  FirstYearRegionAverage: number;
  FirstSurveyYear: number;
  SecondYearEnteredValue: number;
  SecondYearRegionAverage: number;
  SecondSurveyYear: number;
  ThirdYearEnteredValue: number;
  ThirdYearRegionAverage: number;
  ThirdSurveyYear: number;
  EnteredValueDifference: number;

  constructor(
    dentalCodeId: number,
    dentalCode: string,
    firstYearEnteredValue: number,
    firstYearRegionAverage: number,
    firstSurveyYear: number,
    secondYearEnteredValue: number,
    secondYearRegionAverage: number,
    secondSurveyYear: number,
    thirdYearEnteredValue: number,
    thirdYearRegionAverage: number,
    thirdSurveyYear: number
  ) {
    this.DentalCodeId = dentalCodeId;
    this.DentalCode = dentalCode;
    this.FirstYearEnteredValue = firstYearEnteredValue;
    this.FirstYearRegionAverage = firstYearRegionAverage;
    this.FirstSurveyYear = firstSurveyYear;
    this.SecondYearEnteredValue = secondYearEnteredValue;
    this.SecondYearRegionAverage = secondYearRegionAverage;
    this.SecondSurveyYear = secondSurveyYear;
    this.ThirdYearEnteredValue = thirdYearEnteredValue;
    this.ThirdYearRegionAverage = thirdYearRegionAverage;
    this.ThirdSurveyYear = thirdSurveyYear;
    this.EnteredValueDifference = firstYearEnteredValue - thirdYearEnteredValue;
  }
}
