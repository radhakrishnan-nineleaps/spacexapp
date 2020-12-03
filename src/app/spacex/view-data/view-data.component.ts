import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { Spaces } from '../space.model';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnChanges, OnInit {

  @Output() showOrHideSpinner = new EventEmitter<boolean>();
  @Input() searchFilteredData: any;

  spaceXData: any;
  apiParams: any;

  constructor(private commonServiceService: CommonServiceService) { }

  ngOnChanges(): void {
    this.apiParams = '';
    if(this.searchFilteredData!= null && this.searchFilteredData.launchType != null) {
      this.apiParams = this.apiParams.concat('&launch_success='+this.searchFilteredData.launchType);
    }
    if(this.searchFilteredData!= null && this.searchFilteredData.landingType != null) {
      this.apiParams = this.apiParams.concat('&land_success='+this.searchFilteredData.landingType);
    }
    if(this.searchFilteredData!= null && this.searchFilteredData.year != null) {
      this.apiParams = this.apiParams.concat('&launch_year='+this.searchFilteredData.year);
    }
    console.log(this.apiParams)

    this.showOrHideSpinner.emit(true)
    this.commonServiceService.getSpaceXDataWithFilter(this.apiParams).subscribe(data => {
      this.spaceXData = [];
      for (const d of (data as any)) {
        this.spaceXData.push({
          flight_number: d.flight_number,
          mission_name: d.mission_name,
          mission_id: d.mission_id,
          launch_year: d.launch_year,
          launch_success: d.launch_success,
          land_success: d.rocket.first_stage.cores[0].land_success
          
        });
      }
      this.showOrHideSpinner.emit(false)
      console.log(this.spaceXData)
    })
  }

  ngOnInit(): void {
    this.showOrHideSpinner.emit(true)
    this.commonServiceService.getSpaceXData().subscribe(data => {
      for (const d of (data as any)) {
        this.spaceXData.push({
          flight_number: d.flight_number,
          mission_name: d.mission_name,
          mission_id: d.mission_id,
          launch_year: d.launch_year,
          launch_success: d.launch_success,
          land_success: d.rocket.first_stage.cores[0].land_success
        });
      }
      this.showOrHideSpinner.emit(false)
      console.log(this.spaceXData)
    })
  }

}
