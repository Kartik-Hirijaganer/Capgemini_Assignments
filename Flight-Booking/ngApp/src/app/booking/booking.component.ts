import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
//import { NgForm } from '@angular/forms';

//import { FlightData } from '../shared/flight-data.model';
import { BookFlightService } from '../bookService/book-flight.service';

declare var M: any;
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  

  userDetails= {
    firstName: '',
    lastName: '',
    dateOfBirth: ''
  }
  constructor(public bookService: BookFlightService, public _authService: AuthService) { }

  //userDetails =  this.bookService.userDetails;

  ngOnInit(): void {
  }

  // }
  // refreshFlightList() {
  //   this.bookService.getFlightList().subscribe((res) => {
  //     this.bookService.flights = res as FlightData[];
  //   });
  // }

  onBook(){
    //console.log('inside on book');
    var user = this.userDetails;
    var flight = this.bookService.flight[0];
   
    let bookingObj= {
      flight,
      user
    }
    //console.log(bookingObj);

    this.bookService.postBookingDetails(bookingObj)
      .subscribe(
        res => {
          console.log(res);
          //M.toast({ html: 'Saved successfully', classes: 'rounded' });
        },
        err => {
          console.log(err);
        }
      )

    //var token = this._auth.getToken();
    // let token = localStorage.getItem('token');
    // console.log(token);
     
  }
}
