import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  vName: string = '0.0.0';
  _vName: string = '';


  constructor() {
    this.getName();
  }

  getName() {
    this._vName = this.vName;
  }
}
