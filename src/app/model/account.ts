export class Account {
    name: string;
    startDate: Date;
    endDate: Date;
    portfolio: number;
    orgCountry: Map<number,number>;
    


    constructor(name: string, startDate: Date, endDate: Date, portfolio: number, orgCountry: Map<number,number>)  {
         this.name = name; 
         this.startDate = startDate;
         this.endDate = endDate;
         this.portfolio = portfolio;
         this.orgCountry = orgCountry;        
   }
}