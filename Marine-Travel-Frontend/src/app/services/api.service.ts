import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Customer{
  customerId: string;
  fullName: string;
  title: string;
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 private readonly baseUrl = 'http://localhost:7168/api';
  constructor(private http: HttpClient) { }
  GetUsers():Observable<Customer[]>{
    return this.http.get<Customer[]>('http://localhost:7168/api/Customer/GetAll');
  }
}
