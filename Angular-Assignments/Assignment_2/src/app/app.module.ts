import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe }from './filter.pipe';
import { FormEditComponent } from './form-edit/form-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    routingComponents,
    FormEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
