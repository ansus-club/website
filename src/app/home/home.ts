import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  imageList: string[] = [
    "images/carousel1.jpg",
    "images/carousel2.jpg",
    "images/carousel3.jpg",
    "images/carousel4.jpg",
    "images/carousel5.jpg"
  ]
}
