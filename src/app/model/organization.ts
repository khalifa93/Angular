import { Injectable } from "@angular/core";

@Injectable()
export class Organization {
    id: number;
    name: string;
    constructor(id: number, name: string)  {
        this.name = name; 
        this.id = id;
   }
}