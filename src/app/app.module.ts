import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MatPaginatorModule, MatTableModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DentalPracticeListComponent } from './dental-practice-list/dental-practice-list.component';
import { HeaderComponent } from './header/header.component';
import { DentalPracticeTableComponent } from './dental-practice-list/dental-practice-table/dental-practice-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DentalPracticeListComponent,
    HeaderComponent,
    DentalPracticeTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
