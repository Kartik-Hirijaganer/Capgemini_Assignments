import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { SearchService } from '../search/search.service';
import { MatDialog } from '@angular/material/dialog';
//import {MatDialogModule} from '@angular/material/dialog';

import { SearchData } from '../search/search-data.model';
import { FlightData } from '../shared/flight-data.model';
import { Router } from '@angular/router';
import { DialogLoginComponent } from '../dialog-login/dialog-login.component';
import { BookFlightService } from '../bookService/book-flight.service';


@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {
  
  flightSearchData:SearchData = new SearchData;

  constructor(public _authService: AuthService, public searchService: SearchService, private _router: Router, public dialog: MatDialog, private bookService: BookFlightService) { }

  ngOnInit(): void {
    this.refreshFlightList();
  }

  

  onSubmit(form: NgForm){
    this.searchService.getSearchedFlights(form.value.source, form.value.destination).subscribe((res) => {
      this.searchService.flights = res as FlightData[];
    });
  }

  refreshFlightList() {
    this.searchService.getFlightList().subscribe((res) => {
      this.searchService.flights = res as FlightData[];
    });
  }

  bookNow(f: FlightData){
    //var status = this._authService.loggedIn();
    if(this._authService.loggedIn()){
      this.bookService.flight.push(f);
      this._router.navigate(['/booking']);
    }
    else{
      //dialog box;
      this.dialog.open(DialogLoginComponent);
    }
  }
}
