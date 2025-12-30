import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class People {
  constructor(private http: HttpClient) { }

  getKeyPeople() {
    return this.http.get('data/key-people.json');
  }

}
