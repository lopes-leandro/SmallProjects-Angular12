import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerCardsInterface } from '../interfaces/customer-cards.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Partial<CustomerCardsInterface>[]> {
    return this.http.get<Partial<CustomerCardsInterface>[]>('/assets/customers.json');
  }
}
