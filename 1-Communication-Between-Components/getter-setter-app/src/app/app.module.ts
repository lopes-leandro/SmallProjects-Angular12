import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VersionControlComponent } from './version-control/version-control.component';
import { VersionControlLogsComponent } from './version-control-logs/version-control-logs.component';

@NgModule({
  declarations: [
    AppComponent,
    VersionControlComponent,
    VersionControlLogsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
