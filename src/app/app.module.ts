import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/_shared/welcome/welcome.component';
import { ReportsTableComponent } from './components/home/reports-table/reports-table.component';
import { ResultsTableComponent } from './components/home/results-table/results-table.component';
import { HttpClientModule } from '@angular/common/http';
import { NewRecordComponent } from './components/_shared/new-record/new-record.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompletedAlertComponent } from './components/_shared/completed-alert/completed-alert.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    ReportsTableComponent,
    ResultsTableComponent,
    NewRecordComponent,
    CompletedAlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
