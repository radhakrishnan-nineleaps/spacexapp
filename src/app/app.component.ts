import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  filterDataToComponent: any = null;
  constructor(private SpinnerService: NgxSpinnerService) {}

  ngOnInit(): void {
    
  }

  showOrHideSpinnerFunc(val: boolean) {
    if(val) {
      this.showSpinner()
    } else {
      this.hideSpinner()
    }
  }
  
  showSpinner() {
    this.SpinnerService.show()
  }

  hideSpinner() {
    this.SpinnerService.hide()
  }

  getDataWithFilters(filterVal: any) {
    this.filterDataToComponent = filterVal
  }

  title = 'spaceXApplication';
}
