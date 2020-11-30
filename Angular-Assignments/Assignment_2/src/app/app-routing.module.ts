import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormEditComponent } from './form-edit/form-edit.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'formEdit', component:FormEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  HomeComponent,
  FormEditComponent
];
