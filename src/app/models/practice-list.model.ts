export interface PracticeList {
  PracticeName: string;
  PracticeId: number;
  CodeDifference: number;
  ClientId: number;
}

export interface PracticeDetail {
  DentalCodeId: number;
  DentalCode: string;
  CodeDescription: string;
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
  Address: string;
  City: string;
  RegionName: string;
  State: string;
  ZipCode: string;
  FirstYear: PracticeDetail[];
  SecondYear: PracticeDetail[];
  ThirdYear: PracticeDetail[];
}

export class Practice {
  Name: string;
  RegionName: string;
  Address: string;
  City: string;
  State: string;
  ZipCode: string;

  constructor(name: string, region: string, address: string, city: string, state: string, zipCode: string) {
    this.Name = name;
    this.RegionName = region;
    this.Address = address;
    this.City = city;
    this.State = state;
    this.ZipCode = zipCode;
  }
}

export class PracticeRegionTableDTO {
  DentalCodeId: number;
  DentalCode: string;
  CodeDescription: string;
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
    codeDescription: string,
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
    this.CodeDescription = codeDescription;
    this.FirstYearEnteredValue = firstYearEnteredValue;
    this.FirstYearRegionAverage = firstYearRegionAverage;
    this.FirstSurveyYear = firstSurveyYear;
    this.SecondYearEnteredValue = secondYearEnteredValue;
    this.SecondYearRegionAverage = secondYearRegionAverage;
    this.SecondSurveyYear = secondSurveyYear;
    this.ThirdYearEnteredValue = thirdYearEnteredValue;
    this.ThirdYearRegionAverage = thirdYearRegionAverage;
    this.ThirdSurveyYear = thirdSurveyYear;
    this.EnteredValueDifference = firstYearEnteredValue - firstYearRegionAverage;
  }
}
