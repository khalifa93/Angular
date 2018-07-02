import { Injectable } from '@angular/core';
import { Portfolio } from './model/portfolio';
import { Country } from './model/country';
import { Organization } from './model/organization';
import { Account } from './model/account';
import { PORTFOLIOS } from './mock-portfolios';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'; // <-- Later to be used for a response from a request
import { IPortfolio } from './model/IPortfolio';
import {RequestOptions, Request, RequestMethod} from '@angular/http';

@Injectable({
  providedIn: 'root',
})

export class PredictionService {
  readonly BASE_URL = 'http://localhost:8080/HRP_Zero/';
  private url = '/assets/data/portfolios.json'
  
  private dateNow;
  private startDate;
  private endDate;
  private orgCountry;
  private portfolio;
  private account;

  constructor(private http: HttpClient) { }

  getPortfolios(): Observable<Portfolio[]> {
    //getPortfolios(): Portfolio[] {

    //return this.http.get<Portfolio[]>(this.BASE_URL+"getPortfolios").pipe(map(x=>x));
    return this.http.get<Portfolio[]>(this.BASE_URL+"getPortfolios"); //‘access-control-allow-origin’ missing
    //return this.http.get<IPortfolio[]>(this.url);
    
    //  .pipe(map((response: Response) => <Portfolio[]> response.json()););
    //return of (this.http.get('https://localhost:3306/prediction/getPortfolios')); // < -- Get data from restful api function 
  }

  getCountries(): Observable<Country[]>{
    return this.http.get<Country[]>(this.BASE_URL+"getCountries");
  }

  getOrganizations(): Observable<Organization[]>{
    return this.http.get<Organization[]>(this.BASE_URL+"getOrganizations");
  }

  getData(): Observable<Account>{

    // Insert date
    this.dateNow = new Date();
    this.startDate = 

    //get all data
    this.account = new Account('name', new Date, new Date, this.portfolio, this.orgCountry);
    
    return this.account;
  }

  
}



