import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, merge } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 12 com RxJs - Operadores Map / Merge';

  subscription: Subscription | null = null;
  inputStreamData = ['bizhub C3110', 'bizhub C3351', 'bizhub C3350', 'bizhub C266', 'bizhub C221'];
  inputSerieStreamData = ['Eternals', 'Black Widow', 'Avengers', 'Infinity Gauntlet', 'Star Wars', 'The Amazing Spider-Man', 'Moon Knight', 'Vision'];
  outputStreamData: any[] = [];

  public startStream(): void {
    const streamSource = interval(1500);
    const seriesSource = interval(1000)
      .pipe(
        map(output => output % this.inputSerieStreamData.length),
        map(index => this.inputSerieStreamData[index])
      )
    this.subscription = streamSource
      .pipe(
        map(output => output % this.inputStreamData.length),
        map(index => this.inputStreamData[index]),
        merge(seriesSource)
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
