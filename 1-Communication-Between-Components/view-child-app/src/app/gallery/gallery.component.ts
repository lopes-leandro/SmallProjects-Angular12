import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface IPictures {
  id: string,
  author: string,
  width: number,
  height: number,
  url: string,
  download_url: string
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  picture: IPictures[] = [];

  configUrl = 'assets/configURL.json';

  pictures: string[] = [
    'https://picsum.photos/id/111/400/300',
    'https://picsum.photos/id/133/400/300',
    'https://picsum.photos/id/183/400/300',
    'https://picsum.photos/id/655/400/300',
    'https://picsum.photos/id/892/400/300',
    'https://picsum.photos/id/1072/400/300',
    'https://picsum.photos/id/1071/400/300',
  ];

  constructor(private http: HttpClient) { }

  async generateImage(): Promise<string> {
    let aleatorio: number = Math.floor(Math.random() * (30 - 0 + 1)) + 0;
    aleatorio = aleatorio == 30 ? --aleatorio : aleatorio
    
    await this.http.get<Array<IPictures>>('https://picsum.photos/v2/list').subscribe((list: IPictures[]) => {
      this.picture = list
    })

    if(this.picture.length < 1) return '';

    return this.picture[aleatorio].download_url
      .replace(this.picture[aleatorio].width.toString(), '400')
      .replace(this.picture[aleatorio].height.toString(), '300')
  }

  ngOnInit(): void {
  }

}
