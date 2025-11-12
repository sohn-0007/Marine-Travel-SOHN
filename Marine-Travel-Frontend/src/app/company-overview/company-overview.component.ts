import { Component, OnInit, } from '@angular/core';
import { CompanyStateService } from '../services/company-state.service';
import { Customer, Company } from '../services/http/api-http.service';
import { take } from 'rxjs';

@Component({
  selector: 'mt-company-overview',
  templateUrl: './company-overview-component.html',
})
export class CompanyOverviewComponent implements OnInit {

  title = 'Marine-Travel-Project';
  companies: Company[] = [];
  error: string | null = null;
  loading = false;
  amountOfCompanies = 0;
  timer: any;
  redundantList: any[] = [];
  backupData: any = {};
  tempHolder: any = [];
  isDataLoaded: boolean = false;
  

  constructor(
    private readonly companyStateService: CompanyStateService
  ) {
  }

  ngOnInit() {
    this.loadCompanies();
  }

  recalculateAmount() : void {
    this.amountOfCompanies = this.companies?.length || 0;
  }

  loadCompanies(): void {
    if (this.loading) return; // prevent duplicate clicks
    this.loading = true;
    this.error = null;

      this.companyStateService.getAll()
      .pipe(take(1))
      .subscribe({
        next: (companies) => {
          this.companies = this.sortByTitle(companies);
          this.isDataLoaded = true;
          this.loading = false;
          this.recalculateAmount();
        },
        error: (err) => {
          console.error(err);
          this.error = 'Failed to load data';
          this.loading = false;
        }
      });
  }

  sortByTitle(companies: Company[]): Company[] {
    return companies.sort((a, b) => a.companyName.localeCompare(b.companyName));
  }

  resetData() : void {
    if (confirm('Are you sure?')) {
      this.companies = [];
      this.amountOfCompanies = 0;
      this.error = null;
    }
  }

}
