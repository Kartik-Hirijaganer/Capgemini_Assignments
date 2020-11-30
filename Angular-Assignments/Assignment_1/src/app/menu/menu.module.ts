import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

const MenuComponents=[
  MatButtonModule,
  MatMenuModule
]

@NgModule({
  imports: [MenuComponents],
  exports:[MenuComponents]
})
export class MenuModule { }
