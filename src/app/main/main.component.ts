import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { YearService } from '../services/year.service';
import { PracticeList } from '../models/practice-list.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  yearList: number[];
  selectedYear: number;
  practiceAveragesList: PracticeList[];
  isYearSelected: boolean;
  constructor(private dataService: DataService, private yearService: YearService) { }

  ngOnInit() {
    this.isYearSelected = false;
    this.yearList = this.yearService.years;
    this.yearService.selectedYear$.subscribe(data => this.selectedYear = data);
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

  onYearSelected(event) {
    this.setYear(event.value);
    this.getPracticeAverages(this.selectedYear);
  }

  setYear(year: number) {
    this.yearService.setYear(year);
  }

}
