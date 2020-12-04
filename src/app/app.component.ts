import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'spaceXApplication';
  filterDataToComponent: any = null;
  constructor(private SpinnerService: NgxSpinnerService) {}

  ngOnInit(): void {
  }

  showOrHideSpinnerFunc(val: boolean): void {
    if (val) {
      this.showSpinner();
    } else {
      this.hideSpinner();
    }
  }

  showSpinner(): void {
    this.SpinnerService.show()
  }

  hideSpinner(): void {
    this.SpinnerService.hide()
  }

  getDataWithFilters(filterVal: any): void {
    this.filterDataToComponent = filterVal;
  }

}
