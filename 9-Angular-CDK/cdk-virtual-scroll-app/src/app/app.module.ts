import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from "@angular/cdk/scrolling";
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
    HttpClientModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
