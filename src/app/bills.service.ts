import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BillsService {
  public baseUrl = 'https://calm-anchorage-20290.herokuapp.com/';

  constructor(private http: HttpClient) {}

  getBills(customer: string): Observable<any> {
    return this.http.get(this.baseUrl + 'api/v1/bills?customer=' + customer);
  }

  deleteBills(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'api/v1/bills/' + id);
  }

  postBills(data: number): Observable<any> {
    return this.http.post(this.baseUrl + 'api/v1/bills/', data);
  }
}
