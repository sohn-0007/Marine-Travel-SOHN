import { Component, OnInit, } from '@angular/core';
import { forkJoin, take } from 'rxjs';
import { CustomerStateService } from '../services/customer-state.service';
import { CompanyStateService } from '../services/company-state.service';
import { Customer, Company } from '../services/http/api-http.service';

type CustomerWithCompany = Customer & { companyName?: string };

@Component({
  selector: 'mt-customer-overview',
  templateUrl: './customer-overview-component.html',
})
export class CustomerOverviewComponent implements OnInit {
  customers: CustomerWithCompany[] = [];
  companies: Company[] = [];
  error: string | null = null;
  loading = false;
  amountOfCustomer = 0;
  redundantList: any[] = [];
  isDataLoaded: boolean = false;

  constructor(
    private readonly customerStateService: CustomerStateService,
    private readonly companyStateService: CompanyStateService
  ) {
  }

  ngOnInit() {
  }

  recalculateAmount() {
    this.amountOfCustomer = this.customers?.length || 0;
  }

  loadCustomers(): void {
    if (this.loading) return; // prevent duplicate clicks
    this.loading = true;
    this.error = null;

    forkJoin([
      this.customerStateService.getAll(),
      this.companyStateService.getAll()
    ])
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          const [customers, companies] = data;
          this.customers = this.sortByTitle(customers).map(cust => {
            const company = companies.find(comp => comp.companyId === (cust as any).companyId);
            return { ...cust, companyName: company ? company.companyName : 'Unknown' };
          });
          this.companies = companies;
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

  sortByTitle(customers: Customer[]): Customer[] {
    customers.sort((a, b) => a.title.localeCompare(b.title));
    return customers;
  }

  resetData() {
    if (confirm('Are you sure?')) {
      this.customers = [];
      this.amountOfCustomer = 0;
      this.error = null;
    }
  }

}
