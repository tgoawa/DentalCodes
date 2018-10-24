import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { YearService } from '../services/year.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  yearList: number[];
  constructor(private dataService: DataService, private yearService: YearService) { }

  ngOnInit() {
    this.yearList = this.yearService.years;
  }

}
