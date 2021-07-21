import { Component } from '@angular/core';
import { Record } from 'src/app/models/Record';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  selectedReport: Record;
  constructor() { }

  getSelectedReport(e){
    this.selectedReport = e;
  }
}
