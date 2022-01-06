import { Component, Input } from '@angular/core';
import { interval, partition, merge, Subscription } from 'rxjs';
import { map, tap } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 12 com RxJs - Operadores Map / Merge';

  subscription: Subscription | null = null;
  combinedStreamData = [
    {
      type: 'filme',
      title: 'Venom: Tempo de Carnificina'
    },
    {
      type: 'filme',
      title: 'Não Olhe para Cima'
    },
    {
      type: 'filme',
      title: 'After - Depois do Desencontro'
    },
    {
      type: 'filme',
      title: 'Alerta Vermelho'
    },
    {
      type: 'filme',
      title: '#Alive'
    },
    {
      type: 'serie',
      title: 'Eternals'
    },
    {
      type: 'serie',
      title: 'Black Widow'
    },
    {
      type: 'serie',
      title: 'Avengers'
    },
    {
      type: 'serie',
      title: 'Infinity Gauntlet'
    },
    {
      type: 'serie',
      title: 'Star Wars'
    },
    {
      type: 'serie',
      title: 'The Amazing Spider-Man'
    },
    {
      type: 'serie',
      title: 'Moon Knight'
    },
    {
      type: 'serie',
      title: 'Vision'
    }


  ];
  filmes: any[] = [];
  series: any[] = [];

  // inputStreamData = ['bizhub C3110', 'bizhub C3351', 'bizhub C3350', 'bizhub C266', 'bizhub C221'];
  // inputSerieStreamData = ['Eternals', 'Black Widow', 'Avengers', 'Infinity Gauntlet', 'Star Wars', 'The Amazing Spider-Man', 'Moon Knight', 'Vision'];
  outputStreamData: any[] = [];

  public startStream(): void {
    const streamSource = interval(1500)
      .pipe(
        map(input => {
          const index = input % this.combinedStreamData.length;
          return this.combinedStreamData[index];
        })
      );
    
      const [filmesStream, seriesStrean] = partition(
        streamSource, item => item.type === 'filme'
      );

      this.subscription = streamSource.subscribe(input => {
        this.outputStreamData.push(input)
      });

      this.subscription = merge(
        filmesStream.pipe(
          tap(filme => {
            this.filmes.push(filme.title)
          })
        ),
        seriesStrean.pipe(
          tap(serie => this.series.push(serie.title))
        )
      ).subscribe(input => this.outputStreamData.push(input));
  }

  public stopStream(): void {
    this.subscription?.unsubscribe();
    this.subscription = null;
  }
}
