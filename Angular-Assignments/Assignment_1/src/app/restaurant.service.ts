import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }

  myArr:string[] = ["Rising","Kunj Vihar","Gurudev Nx", "Ming Yang", "Hot & Spice"];

  public getList(){
    return this.myArr;
  }
}
