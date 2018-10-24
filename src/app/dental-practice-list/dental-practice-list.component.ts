import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dental-practice-list',
  templateUrl: './dental-practice-list.component.html',
  styleUrls: ['./dental-practice-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DentalPracticeListComponent implements OnInit {
  @Input() dataSource: any[];
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
