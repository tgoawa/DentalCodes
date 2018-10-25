import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import {
  MatPaginatorModule,
  MatTableModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatButtonModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DentalPracticeListComponent } from './dental-practice-list/dental-practice-list.component';
import { HeaderComponent } from './header/header.component';
import { DentalPracticeTableComponent } from './dental-practice-list/dental-practice-table/dental-practice-table.component';
import { PracticeCodesTableComponent } from './practice-codes-table/practice-codes-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DentalPracticeListComponent,
    HeaderComponent,
    DentalPracticeTableComponent,
    PracticeCodesTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
