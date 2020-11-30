import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  adverArr:any=[];

  public getList(){
    return this.adverArr;
  }

  
}
