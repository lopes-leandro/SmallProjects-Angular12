import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomerCardsInterface } from './interfaces/customer-cards.interface';
import { DataService } from './repository/data.service';

const LOADER_TIMEOUT = 3000;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'Nossos Clientes';
  showLoader: boolean = false;
  inputStreamData = ['john wick', 'inception',   'interstellar'];
  streamsOutput$: Observable<Partial<CustomerCardsInterface>[]> | null = null;
  
  constructor(private customerService: DataService) {}
  
  ngOnInit(): void {
    this.showLoader = true;
    setTimeout(() => {
      this.showLoader = false;
      this.streamsOutput$ = this.customerService.getCustomers();
    }, LOADER_TIMEOUT)
  }
}
