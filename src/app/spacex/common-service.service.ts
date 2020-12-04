import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Spaces } from './space.model';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  spaceXUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';

  constructor(private http: HttpClient) { }

  getSpaceXData(): Observable<Spaces[]> {
    return this.http.get<Spaces[]>(this.spaceXUrl)
  }

  getSpaceXDataWithFilter(filters: any): Observable<Spaces[]> {
    return this.http.get<Spaces[]>(this.spaceXUrl.concat(filters))
  }

}
