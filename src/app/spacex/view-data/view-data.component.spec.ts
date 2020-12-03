import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDataComponent } from './view-data.component';
import {CommonServiceService} from '../common-service.service'
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ViewDataComponent', () => {
  let component: ViewDataComponent;
  let fixture: ComponentFixture<ViewDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
    ],
      declarations: [ ViewDataComponent ],
      providers: [CommonServiceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
