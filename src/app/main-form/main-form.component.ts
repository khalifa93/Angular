import { Component, OnInit } from '@angular/core';
import {Portfolio} from '../model/portfolio';
import { PredictionService } from '../prediction.service';
import { Organization } from '../model/organization';
import { Country } from '../model/country';
import { IPortfolio } from '../model/IPortfolio';


@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
  portfolios: Portfolio[];
  organizations: Organization[];
  countries: Country[];

  selectedPortfolio: number;
  orgCountry:Map<number, number>;
  startDate: Date;
  endDate: Date;


  constructor(private predictionService: PredictionService) { }

  getPortfolios(): void {
    this.predictionService.getPortfolios().subscribe(portfolios => this.portfolios=portfolios);
  }

  getOrganizations(): void {
    this.predictionService.getOrganizations().subscribe(organizations => this.organizations=organizations);
  }  

  getCountries(): void {
    this.predictionService.getCountries().subscribe(countries => this.countries=countries);
  }    
 
  ngOnInit() {
    this.getPortfolios();
    this.getCountries();
    this.getOrganizations();
  }



  onSelectPortfolio(portfolio: number): void {
    alert(portfolio);
    this.selectedPortfolio = portfolio;  
    alert(this.selectedPortfolio);
  }


  createAccount(projectName: string, orgs: number[]){
    alert(orgs);
  }
  // onSelectCountries(countries: Country[]): void {
  //   this.selectedCountries = countries;  
  // } 

  // onSelectOrganizations(organizations: Organization[]): void {
  //   this.selectedCountries = organizations;  
  // } 




}
