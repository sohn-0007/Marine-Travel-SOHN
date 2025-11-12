import { Component, OnInit } from '@angular/core';
import { forkJoin, take } from 'rxjs';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { CustomerStateService } from './services/customer-state.service';
import { CompanyStateService } from './services/company-state.service';
import { Customer, Company } from './services/http/api-http.service';

type CustomerWithCompany = Customer & { companyName?: string };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = '';
  customers: CustomerWithCompany[] = [];
  companies: Company[] = [];
  error: string | null = null;
  loading = false;
  amountOfCustomer = 0;
  timer: any;
  redundantList: any[] = [];
  backupData: any = {};
  tempHolder: any = [];
  isDataLoaded: boolean = false;
  internalCounter = 0;

  activeTitle = this.title;

  constructor(
    private readonly customerStateService: CustomerStateService,
    private readonly companyStateService: CompanyStateService
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // nothing here — router subscription is set up in constructor
  }

  // subscribe to router events to get active route data.title
  private setupActiveTitle(router: Router, route: ActivatedRoute) {
    router.events.pipe(
      filter(evt => evt instanceof NavigationEnd),
      map(() => {
        let r: ActivatedRoute | null = route;
        while (r.firstChild) {
          r = r.firstChild;
        }
        return (r && r.snapshot && r.snapshot.data && (r.snapshot.data['title'])) || this.title || ' ';
      })
    ).subscribe((t: string) => this.activeTitle = t);
  }




}
