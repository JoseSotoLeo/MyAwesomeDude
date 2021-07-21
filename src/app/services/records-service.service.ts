import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Record } from '../models/Record';

let PERSISTENT_DATA_REPORTS: Record[];
let PERSISTENT_DATA_OPTIONS: Record[];

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) { }


  public getCurrentReports(): Observable<Record[]>{
    return this.http.get('../assets/mockedData/sound_recordings_input_report.csv', {responseType: 'text'}).pipe(
      map(data => {
        PERSISTENT_DATA_REPORTS = this.parseCsvToArray(data);
        return PERSISTENT_DATA_REPORTS
      }),
      catchError(e => {
        return throwError(e)
      })
    )
  }

  public getOptions(): Observable<Record[]>{
    
    return this.http.get('../assets/mockedData/sound_recordings.csv', {responseType: 'text'}).pipe(
      map(data => {
        if(!PERSISTENT_DATA_OPTIONS){PERSISTENT_DATA_OPTIONS= this.parseCsvToArray(data);}
        
        
        return PERSISTENT_DATA_OPTIONS
      }),
      catchError(e => {
        return throwError(e)
      })
    )
  }

  public getFilteredOptions(filter): Observable<Record[]>{
    return this.http.get('../assets/mockedData/sound_recordings.csv', {responseType: 'text'}).pipe(
      map(data => {
        
        let fixedData;
        PERSISTENT_DATA_OPTIONS ? fixedData = PERSISTENT_DATA_OPTIONS : fixedData = this.parseCsvToArray(data);

        let arr = [];
        
        fixedData.forEach(row => {
          if(row.artist.includes(filter.artist) || filter.artist.includes(row.artist)){
            arr.push(row);
            return
          } 
          if(row.title.includes(filter.title) || filter.title.includes(row.title)){
            arr.push(row);
            return
          }
          if(filter.isrc && row.isrc === filter.isrc){
            arr.push(row);
            return
          }
          
        });
        

        return arr
        
      }),
      catchError(e => {
        return throwError(e)
      })
    )
  }

  public create(record: Record){
    PERSISTENT_DATA_OPTIONS.push(record)
  }

  public complete(record: Record){


    const index = PERSISTENT_DATA_REPORTS.indexOf(record);
    if(index !== -1 ){PERSISTENT_DATA_REPORTS.splice(index,1);}
    
    
  }


  private parseCsvToArray(data){
    let csvToArray = data.split("\n");
    let arr = [];
    for(let i = 1; i<csvToArray.length-1; i++){
      let splittedLine = this.CSVtoArray(csvToArray[i]);
      let record = new Record(splittedLine[0], splittedLine[1], splittedLine[2], splittedLine[3])
      arr.push(record)
    }
    return arr
  }


  private CSVtoArray(text) {
    var re_valid = /^\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*(?:,\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*)*$/;
    var re_value = /(?!\s*$)\s*(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|([^,'"\s\\]*(?:\s+[^,'"\s\\]+)*))\s*(?:,|$)/g;

    if (!re_valid.test(text)) return null;

    var a = [];
    text.replace(re_value,
        function(m0, m1, m2, m3) {
            if (m1 !== undefined) a.push(m1.replace(/\\'/g, "'"));
            else if (m2 !== undefined) a.push(m2.replace(/\\"/g, '"'));
            else if (m3 !== undefined) a.push(m3);
            return ''; 
        });
    if (/,\s*$/.test(text)) a.push('');
    return a;
  };

}
