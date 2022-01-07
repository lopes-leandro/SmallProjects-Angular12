import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, merge, Observable } from 'rxjs';
import { takeWhile, map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  streamOutput$: Observable<number[]> | null;
  inputStreamData1 = ['The Seven Deadly Sins', 'Kakegurui', 'Resident Evil: Infinite Darkness', 'Naruto', 'Akame ga Kill!'];
  inputStreamData2 = ['Eternals', 'Black Widow', 'Avengers', 'Infinity Gauntlet', 'Star Wars', 'The Amazing Spider-Man', 'Moon Knight', 'Vision'];
  inputStreamData3 = ['Violet Evergarden', 'Ghost in the Shell: SAC 2045', 'Dororo', 'Record of Ragnarok']
  outputStreamData: any[] = [];
  isStreamActive: boolean;

  constructor() {
    this.isStreamActive = true;
    this.streamOutput$ = null
  }
  ngOnDestroy(): void {
    // this.stopStream();
  }

  ngOnInit(): void {
  }


  public startStream(): void {

    this.isStreamActive = true;

    const streamSource1 = interval(1500);
    const streamSource2 = interval(1000);
    const streamSource3 = interval(500);

    this.streamOutput$ = merge(
      streamSource1,
      streamSource2,
      streamSource3
    ).pipe(
      takeWhile(() => !!this.isStreamActive),
      map(output => {
        // Isso verifica se o subscribe é REALMENTE destruido ao destruir o componente
        console.log(output);        
        this.outputStreamData = [...this.outputStreamData, output];
        return this.outputStreamData;
      })
    )

     
    
  }

  // não é mais necessário
  // public stopStream(): void {
  //   this.isStreamActive = false;
  // }

}
