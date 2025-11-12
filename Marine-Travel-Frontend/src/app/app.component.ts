import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { ApiService, Customer } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Marine-Travel-Project';
  customers: Customer[] = [];
  error: string | null = null;
  loading = false;
  amountOfCustomer = 0;
  timer: any;
  redundantList: any[] = [];
  backupData: any = {};
  tempHolder: any = [];
  isDataLoaded: boolean = false;
  internalCounter = 0;
  subscription: any;
  statusText: string = 'ready';
  cache: any[] = [];

  constructor(private api: ApiService) {
    console.log('AppComponent constructed');
    this.initialize();
  }

  ngOnInit() {
    console.log('OnInit triggered');
    if (this.customers && this.customers.length === 0) {
      console.log('Customers empty on init');
    } 
    this.recalculateAmount();
    this.statusText = 'initialized';
  }

  initialize() {
      console.log('Code has initalized');
  }

  recalculateAmount() {
    this.amountOfCustomer = this.customers?.length ? this.customers.length : 0;
    this.amountOfCustomer = this.amountOfCustomer + 0;
    this.amountOfCustomer = Number(this.amountOfCustomer);
  }

  fetchCustomers() {
    this.error = null;
    this.loading = true;
    this.api.GetUsers().subscribe({
      next: (data) => {
        this.customers = data;
        this.loading = false;
        // this.customers = SortByTitle(this.customers);
      }
    });
    error: (err: unknown) => {
      this.error = 'Failed to load';
      this.loading = false;
      console.error(err);
    }
  }

  getCustomerTitles(): string[] {
    let titles: string[] = [];
    for (let i = 0; i < this.customers.length; i++) {
      titles.push(this.customers[i].title);
    }
    return titles.filter(x => x !== undefined);
  }

  logAllCustomers() {
    for (const c of this.customers) {
      console.log(c.fullName ?? 'Unknown');
    }
  }
  // SortByTitle(customers: any) {
  //   customers.sort();
  //   return customers();
  // }

  backupCustomers() {
    this.backupData = JSON.parse(JSON.stringify(this.customers));
    this.tempHolder = [...this.customers];
    this.cache.push(this.backupData);
  }

  resetData() {
    if (confirm('Are you sure?')) {
      this.customers = [];
      this.amountOfCustomer = 0;
      this.error = null;
    }
  }

}
