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


  ]
  // inputStreamData = ['bizhub C3110', 'bizhub C3351', 'bizhub C3350', 'bizhub C266', 'bizhub C221'];
  // inputSerieStreamData = ['Eternals', 'Black Widow', 'Avengers', 'Infinity Gauntlet', 'Star Wars', 'The Amazing Spider-Man', 'Moon Knight', 'Vision'];
  outputStreamData: any[] = [];

  public startStream(): void {
    
  }

  public stopStream(): void {

  }
}
