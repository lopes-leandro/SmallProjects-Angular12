import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 12 com RxJs - Operador Map';

  subscription: Subscription | null = null;
  inputStreamData = ['bizhub C3110', 'bizhub C3351', 'bizhub C3350', 'bizhub C266', 'bizhub C221'];
  outputStreamData: number[] = [];

  public startStream(): void {
    const streamSource = interval(1500);
    this.subscription = streamSource.subscribe(input => {
      this.outputStreamData.push(input);
    });
  }

  public stopStream(): void {
    this.subscription?.unsubscribe();
    this.subscription = null;
  }
}
