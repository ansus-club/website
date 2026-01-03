import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { KeyPeopleResponse } from '../../models/key-people.model';
import { catchError, map, throwError } from 'rxjs';
import { Members } from '../../models/members.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private httpClient = inject(HttpClient);

  getKeyPeople() {
    return this.httpClient.get<KeyPeopleResponse>('data/key-people.json').pipe(
      catchError((err) => {
        console.log(err);
        return throwError(() => new Error("Something went wrong while fetching key people. Please, try again later."));
      })
    );
  }

  getMembers() {
    return this.httpClient.get<Members>('data/members.json').pipe(
      // sort the members alphabetically ignoring case
      map((members) => ({
        ...members,
        data: [...members.data].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
      })),
      catchError((err) => {
        console.log(err);
        return throwError(() => new Error("Something went wrong while fetching our members. Please, try again later."));
      })
    );
  }

}
