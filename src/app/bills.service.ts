import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BillsService {
  public baseUrl = 'https://hub.apitree.com/rodrigofaria/bill/';

  constructor(private http: HttpClient) {}

  getBills(): Observable<any> {
    return this.http.get(this.baseUrl + 'api/v1/bills');
  }
}
