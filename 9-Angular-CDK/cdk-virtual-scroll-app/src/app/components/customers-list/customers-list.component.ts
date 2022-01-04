import { Component, Input, OnInit } from '@angular/core';
import { CustomerCardsInterface } from 'src/app/interfaces/customer-cards.interface';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  @Input() listItems: Partial<CustomerCardsInterface>[] | null = [];
  constructor() { }

  ngOnInit(): void {
  }

}
