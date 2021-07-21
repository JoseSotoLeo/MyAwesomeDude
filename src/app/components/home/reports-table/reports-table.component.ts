import { animate, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, Output, EventEmitter, AfterViewInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { fadeAnimation } from 'src/app/animations/animations';
import { Record } from 'src/app/models/Record';
import { RecordsService } from 'src/app/services/records-service.service';
 

@Component({
  selector: 'app-reports-table',
  templateUrl: './reports-table.component.html',
  styleUrls: ['./reports-table.component.scss'],
  animations: [fadeAnimation]
})
export class ReportsTableComponent  {

  @Output() selectedReport = new EventEmitter<Record>();
  helperSelectedReport: Record;

  constructor( 
    private recordsService: RecordsService) { }

 
  
  headers$: String[] = [];
  reports$: Observable<any> = this.recordsService.getCurrentReports().pipe(
    map(data => {
      this.headers$ = Object.keys(data[0]);
      return data
    })
  );

  public selectReport(report){
    this.helperSelectedReport = report;
    this.selectedReport.emit(report)
  }
  
}
