import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, OnChanges, SimpleChanges } from '@angular/core';
import { ComponentCardType } from 'src/app/constants/component-card-type';
import { Component1Component } from "../component1/component1.component";
import { Component2Component } from "../component2/component2.component";

@Component({
  selector: 'app-component-card',
  templateUrl: './component-card.component.html',
  styleUrls: ['./component-card.component.scss']
})
export class ComponentCardComponent implements OnInit, OnChanges {

  @Input() type!: ComponentCardType;
  @ViewChild('vrf', {read: ViewContainerRef}) vrf!: ViewContainerRef;
  cardTypes = ComponentCardType;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.type.currentValue !== undefined) {
      console.log(`tipo do card alterado para : ${changes.type.currentValue}`);
      this.loadDynamicComponent(changes.type.currentValue);
    }
  }

  loadDynamicComponent(type: ComponentCardType){
    let component;
    switch (type) {
      case ComponentCardType.Component1:
        component = Component1Component
        break;
    
      case ComponentCardType.Component2:
        component = Component2Component
        break;
    }

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.vrf.clear();
    this.vrf.createComponent(componentFactory);
  }

  ngOnInit(): void {
  }

}
