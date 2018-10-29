import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { YearService } from '../services/year.service';
import { PracticeList, PracticeInfo, PracticeRegionCode, PracticeRegionTableDTO } from '../models/practice-list.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  yearList: number[];
  selectedYear: number;
  practiceAveragesList: PracticeList[];
  practiceRegionCode: PracticeRegionCode;
  practiceRegionTableDTO: PracticeRegionTableDTO[];
  practiceName: string;
  isYearSelected: boolean;
  showTable: boolean;
  constructor(private dataService: DataService, private yearService: YearService) { }

  ngOnInit() {
    this.isYearSelected = false;
    this.yearList = this.yearService.years;
    this.yearService.selectedYear$.subscribe(data => this.selectedYear = data);
    this.showTable = false;
  }

  getPracticeAverages(year: number) {
    this.isYearSelected = true;
    this.dataService.getPracticeAverages(year)
      .subscribe((data: PracticeList[]) => {
        this.practiceAveragesList = data;
      }, error => {
        console.error(error);
      });
  }

  onPracticeSelected(event: PracticeInfo) {
    this.practiceName = event.PracticeName;
    this.showTable = true;
    this.getPracticeCodesRegions(this.selectedYear, event.PracticeId);
  }

  onYearSelected(event) {
    this.setYear(event.value);
    this.getPracticeAverages(this.selectedYear);
  }

  setYear(year: number) {
    this.yearService.setYear(year);
  }

  private getPracticeCodesRegions(selectedYear: number, practiceId: number) {
    // this.showCodesTable = true;
    // this.practiceName = practiceInfo.PracticeName;
    this.dataService.getPracticeCodesRegions(selectedYear, practiceId)
    .subscribe((data: PracticeRegionCode) => {
      this.practiceRegionCode = data;
      // this.createPracticeRegionTableDTO(this.practiceRegionCode);
    }, error => console.error(error));
  }

}
