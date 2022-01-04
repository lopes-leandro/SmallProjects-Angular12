import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    CustomersListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
