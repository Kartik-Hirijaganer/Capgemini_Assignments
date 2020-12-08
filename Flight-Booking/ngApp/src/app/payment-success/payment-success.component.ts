import { Component, OnInit } from '@angular/core';
import { BookFlightService } from '../bookService/book-flight.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit {

  constructor(public bookFlightService: BookFlightService) { }

  ngOnInit(): void {
  }

  sample(){
    console.log(this.bookFlightService.bookingId.bookingId);
  }

}
