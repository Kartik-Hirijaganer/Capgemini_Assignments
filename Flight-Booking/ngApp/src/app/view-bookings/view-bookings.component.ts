import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookFlightService } from '../bookService/book-flight.service';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit {

  bookedFlights:any;

  constructor(
    private bookFlightService: BookFlightService,
     private route: ActivatedRoute
     ) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('userId');

    this.bookFlightService.getBookedFlights(userId)
      .subscribe(
        res => {
          console.log(res);
          this.bookedFlights = res;
          // console.log(this.bookedFlights[0].flight);
        },
        err => {
          console.log(err);
        }
      )
  }

}
