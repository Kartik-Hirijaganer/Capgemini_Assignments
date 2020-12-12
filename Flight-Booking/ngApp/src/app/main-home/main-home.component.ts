import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { SearchService } from '../search/search.service';
import { MatDialog } from '@angular/material/dialog';

import { SearchData } from '../search/search-data.model';
import { FlightData } from '../shared/flight-data.model';
import { Router } from '@angular/router';
import { BookFlightService } from '../bookService/book-flight.service';


@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {
  
  flightSearchData:SearchData = new SearchData;
  isDisable = false;
  isSearchError = false;

  // errorSource = '';

  constructor(public _authService: AuthService, public searchService: SearchService, private _router: Router, public dialog: MatDialog, private bookService: BookFlightService) { }

  ngOnInit(): void {
    this.disable();
  }

  

  onSubmit(form: NgForm){
    if(form.value.source === form.value.destination){
      this.isSearchError = true;
    }
    this.searchService.getSearchedFlights(form.value.source, form.value.destination).subscribe((res) => {
      this.searchService.flights = res as FlightData[];
      //console.log(res);
    });
  }

  // refreshFlightList() {
  //   this.searchService.getFlightList().subscribe((res) => {
  //     this.searchService.flights = res as FlightData[];
  //   });
  // }

  // checkData(){
  //   if(this.flightSearchData.destination === this.flightSearchData.source){
  //     console.log('return false');
  //     return false;
  //   }
  //   else{
  //     console.log('return true');
  //     return true;
  //   }
  // }

  disable(){
    if(this._authService.loggedIn()){
      this.isDisable = true;
    }
  }
  swap(source: string, des: string){
    this.flightSearchData.destination = source;
    this.flightSearchData.source = des;
  }

  bookNow(f: FlightData){
    this.bookService.flight.push(f);
    this._router.navigate(['/booking']);
  }
}
