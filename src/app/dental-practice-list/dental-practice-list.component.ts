import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { PracticeList } from '../models/practice-list.model';

@Component({
  selector: 'app-dental-practice-list',
  templateUrl: './dental-practice-list.component.html',
  styleUrls: ['./dental-practice-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DentalPracticeListComponent implements OnInit {
  @Input() dataSource: PracticeList[];
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
