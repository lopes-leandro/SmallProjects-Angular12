import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 12 com RxJs - Operador Map';

  subscription: Subscription | null = null;
  inputStreamData = ['bizhub C3110', 'bizhub C3351', 'bizhub C3350', 'bizhub C266', 'bizhub C221'];
  outputStreamData: any[] = [];

  public startStream(): void {
    const streamSource = interval(1500);
    this.subscription = streamSource
      .pipe(
        map(output => output % this.inputStreamData.length),
        map(index => this.inputStreamData[index])
      )
      .subscribe(element => {
        this.outputStreamData.push(element);
      });
  }

  public stopStream(): void {
    this.subscription?.unsubscribe();
    this.subscription = null;
  }
}
