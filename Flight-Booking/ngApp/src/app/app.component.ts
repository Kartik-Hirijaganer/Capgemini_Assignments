import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { BookFlightService } from './bookService/book-flight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngApp';

  constructor(public _authService: AuthService,
     public bookFlightService: BookFlightService
     ){}
}
