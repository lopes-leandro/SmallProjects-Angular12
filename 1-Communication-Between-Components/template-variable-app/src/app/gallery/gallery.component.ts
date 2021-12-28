import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  pictures: string[] = [
    'https://picsum.photos/id/111/400/300',
    'https://picsum.photos/id/133/400/300',
    'https://picsum.photos/id/183/400/300',
    'https://picsum.photos/id/655/400/300',
    'https://picsum.photos/id/892/400/300',
    'https://picsum.photos/id/1072/400/300',
    'https://picsum.photos/id/1071/400/300',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
