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
  practiceAveragesList: PracticeList[];
  constructor(private dataService: DataService, private yearService: YearService) { }

  ngOnInit() {
    this.yearList = this.yearService.years;
  }

  getPracticeAverages(year: number) {
    this.dataService.getPracticeAverages(year)
      .subscribe((data: PracticeList[]) => {
        this.practiceAveragesList = data;
      }, error => {
        console.error(error);
      })
  }

}
