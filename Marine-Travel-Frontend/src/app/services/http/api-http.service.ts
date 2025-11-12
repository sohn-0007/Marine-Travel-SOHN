import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';


export interface Customer {
  customerId: string;
  fullName: string;
  title: string;    
}
export interface Company {
  companyId: string;
  companyName: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {
  private readonly baseUrl = 'http://localhost:7168/api';
  constructor(private http: HttpClient) { }
  
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseUrl}/Customer/GetAll`)
    .pipe(delay(500)); // Simulate network delay
  }
  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.baseUrl}/Company/GetAll`)
    .pipe(delay(500)); // Simulate network delay;
  }
}
