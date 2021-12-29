import { Component } from '@angular/core';
import { ComponentCardType } from './constants/component-card-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-components-app';
  selectedComponentType!: ComponentCardType;
  componentTypes = ComponentCardType;

  setComponentType(type: ComponentCardType){
    this.selectedComponentType = type;
  }
}
