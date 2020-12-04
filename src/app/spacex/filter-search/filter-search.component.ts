import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.css']
})
export class FilterSearchComponent implements OnInit {

  @Output() filteredData = new EventEmitter<any>();

  constructor() { }

  yearValues: Array<number> = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  yearValue: any = null;
  launchTypeValue: any = null;
  landingTypeValue: any = null;

  ngOnInit(): void {
  }

  getSelectedYear(yearVal: number): void {
    this.yearValue = yearVal;
    console.log(yearVal);
    this.getDataFromServer();
  }

  getLaunchType(launchtypeVal: any): void {
    this.launchTypeValue = launchtypeVal;
    console.log(launchtypeVal);
    this.getDataFromServer();
  }

  getLandingType(landingtypeVal: any): void {
    this.landingTypeValue = landingtypeVal;
    console.log(landingtypeVal);
    this.getDataFromServer();
  }

  getDataFromServer(): void {
    const appliedFilter = {
      year: this.yearValue,
      launchType: this.launchTypeValue,
      landingType: this.landingTypeValue
    };
    this.filteredData.emit(appliedFilter);
    console.log(this.yearValue, this.launchTypeValue, this.landingTypeValue);
  }

}
