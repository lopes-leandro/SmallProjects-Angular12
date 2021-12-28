import { Component, ViewChild } from '@angular/core';
import { GalleryComponent } from "./gallery/gallery.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'view-child-app';

  @ViewChild(GalleryComponent)
  gallery!: GalleryComponent;

  async adicionarNovaImagem() {
    const url = await this.gallery.generateImage();
    if (url !== '') {
      this.gallery.pictures.unshift(url)
    }
  }

  removerPrimeiraImagem() {
    this.gallery.pictures.shift();
  }
}
