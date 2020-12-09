import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FlightData } from '../shared/flight-data.model';



@Injectable({
  providedIn: 'root'
})
export class BookFlightService {
  userId = '';
  bookingId:any;

  flight: FlightData[] = [];
  userDetails= {
    firstName: '',
    lastName: '',
    dateOfBirth: ''
  }
 
  readonly baseURL = 'http://localhost:3300/booking/add';

  constructor(private http: HttpClient) { }

  bookedFlight(){
    return this.flight;
  }

  postBookingDetails(bookingObj: any) {
    //console.log(this.userId);
    var ticketId = this.http.post(this.baseURL + `/${bookingObj.flight.flightName}/${this.userId}`, bookingObj);
    return ticketId;
  }
}
