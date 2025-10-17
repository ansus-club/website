import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  imports: [],
  templateUrl: './photos.html',
  styleUrl: './photos.css'
})
export class Photos {
  imageList: string[] = [
    "images/carousel1.jpg",
    "images/carousel2.jpg",
    "images/carousel3.jpg",
    "images/carousel4.jpg",
    "images/carousel5.jpg"
  ]
}
