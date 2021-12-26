import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'getter-setter-app';
  
  _vName: string = '';

  updateVName(event: string) {
    this._vName = event;
  }
}
