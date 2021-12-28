import { Component } from '@angular/core';
import { GalleryComponent } from "./gallery/gallery.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'template-variable-app';

  async adicionarNovaImagem(gallery: GalleryComponent) {
    const url = await gallery.generateImage();
    if (url !== '') {
      gallery.pictures.unshift(url)      
    }
    
  }

  removerPrimeiraImagem(gallery: GalleryComponent) {
    gallery.pictures.shift();
    
  }
}
