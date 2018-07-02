import { Injectable } from "@angular/core";

@Injectable()
export class Country {
    id: number;
    name: string;
    constructor(id: number, name: string)  {
        this.name = name; 
        this.id = id;
   }
}