import { inject, Injectable } from "@angular/core";
import { ApiHttpService, Company, Customer } from "./http/api-http.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CustomerStateService{

    constructor(
        private readonly apiHttpService: ApiHttpService ) { 
    }

    /**
     * get all customer
     * @returns An observable of Customer array
     */
    getAll(): Observable<Customer[]> {
        return this.apiHttpService.getCustomers();
    }
}
