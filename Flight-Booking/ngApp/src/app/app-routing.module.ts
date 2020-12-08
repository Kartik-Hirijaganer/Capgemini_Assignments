import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AuthGuard } from './auth.guard';
import { BookingComponent } from './booking/booking.component';
import { LoginComponent } from './login/login.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { RegisterComponent } from './register/register.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/mainHome', pathMatch: 'full'
  },
  {
    path: 'mainHome', component: MainHomeComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'userHome', component: UserHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'adminHome', component: AdminHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'booking', component: BookingComponent
  },
  {
    path: 'payment/success', component: PaymentSuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  MainHomeComponent,
  LoginComponent,
  RegisterComponent
]