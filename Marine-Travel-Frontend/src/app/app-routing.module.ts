import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerOverviewComponent } from './customer-overview/customer-overview.component';
import { CompanyOverviewComponent } from './company-overview/company-overview.component';

const routes: Routes = [
  { path: 'companies', component: CompanyOverviewComponent },
  { path: 'customers', component: CustomerOverviewComponent },
  { path: '', redirectTo: '/customers', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
