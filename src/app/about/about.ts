import { Component, inject } from '@angular/core';
import { People } from '../services/people-service/people';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  peopleService = inject(People)
  keyPeople: any

  ngOnInit() {
    this.peopleService.getKeyPeople().subscribe(res => {
      this.keyPeople = res;
    });
  }
}
