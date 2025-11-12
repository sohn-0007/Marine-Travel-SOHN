import { inject, Injectable } from "@angular/core";
import { ApiHttpService, Company } from "./http/api-http.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CompanyStateService{

    constructor(private readonly apiHttpService: ApiHttpService ) { 

    }

     /**
     * get all companies
     * @returns An observable of Customer array
     */
    getAll(): Observable<Company[]> {
        return this.apiHttpService.getCompanies();
    }
}
