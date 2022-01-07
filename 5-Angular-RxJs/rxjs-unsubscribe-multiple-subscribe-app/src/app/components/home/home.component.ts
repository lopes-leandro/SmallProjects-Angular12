import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  inputStreamData1 = ['The Seven Deadly Sins', 'Kakegurui', 'Resident Evil: Infinite Darkness', 'Naruto', 'Akame ga Kill!'];
  inputStreamData2 = ['Eternals', 'Black Widow', 'Avengers', 'Infinity Gauntlet', 'Star Wars', 'The Amazing Spider-Man', 'Moon Knight', 'Vision'];
  inputStreamData3 = ['Violet Evergarden', 'Ghost in the Shell: SAC 2045', 'Dororo', 'Record of Ragnarok']
  outputStreamData: any[] = [];
  isStreamActive: boolean;

  constructor() {
    this.isStreamActive = true;
  }
  ngOnDestroy(): void {
    this.stopStream();
  }

  ngOnInit(): void {
  }


  public startStream(): void {

    this.isStreamActive = true;

    const streamSource1 = interval(1500);
    const streamSource2 = interval(1000);
    const streamSource3 = interval(500);

    streamSource1
      .pipe(
        takeWhile(() => !!this.isStreamActive)
      )
      .subscribe(input => {
        this.outputStreamData.push(input);
        console.log(`Primeira transmissão de saída:\n ${input}`);
      });

    streamSource2
      .pipe(
        takeWhile(() => !!this.isStreamActive)
      )
      .subscribe(input => {
        this.outputStreamData.push(input);
        console.log(`Segunda transmissão de saída:\n ${input}`);
      });

    streamSource3
      .pipe(
        takeWhile(() => !!this.isStreamActive)
      )
      .subscribe(input => {
        this.outputStreamData.push(input);
        console.log(`Terceira transmissão de saída:\n ${input}`);
      });
  }

  public stopStream(): void {
    this.isStreamActive = false;
  }

}
