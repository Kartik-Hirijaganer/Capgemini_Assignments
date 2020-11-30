import { NgModule } from '@angular/core';

import {MatListModule} from '@angular/material/list';

const RestaurantComponents=[
  MatListModule
]

@NgModule({
  imports: [RestaurantComponents],
  exports: [RestaurantComponents]
})
export class RestaurantModule { }
