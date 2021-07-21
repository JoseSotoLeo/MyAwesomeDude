import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { fadeAnimation, fadeInAnimation } from 'src/app/animations/animations';
import { Record } from 'src/app/models/Record';
import { RecordsService } from 'src/app/services/records-service.service';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.scss'],
  animations:[fadeAnimation, fadeInAnimation]
})
export class ResultsTableComponent implements OnChanges, OnInit {


  @Input() selectedReport: Record;

  alertShowing: boolean = false;
  headers$: String[] = [];
  options$: Observable<Record[]> = this.recordsService.getOptions().pipe(
    map(data => {
      this.headers$ = Object.keys(data[0]);
      return data
    })
  );

  selectedOption:Record;

  constructor(private recordsService: RecordsService) { }

  ngOnInit(){
    this.options$.subscribe();
  }

  ngOnChanges(){
    if(this.selectedReport){
      this.selectedOption = null;
      this.options$ = this.recordsService.getFilteredOptions(this.selectedReport).pipe(
        map(data => {
          this.headers$ = Object.keys(data[0]);
          return data
        })
      );
      this.options$.subscribe();
    }
  }

  showAll(){
    this.options$ = this.recordsService.getOptions();
    this.selectedOption = null;
  }

  onSelectResult(option){
    this.selectedOption = option;
  }

  onComplete(selectedReport){
    this.recordsService.complete(selectedReport);
    this.selectedOption = null;
    this.selectedReport = null;
    this.alertShowing = true;
  }

  onFinishedTask(e){
    if(!e){return}
    this.options$ = this.recordsService.getFilteredOptions(this.selectedReport);
  }

  onCloseAlert(e){
    this.alertShowing = e;
  }

  

}
