import { Component, DestroyRef, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KeyPeople, KeyPeopleResponse } from '../models/key-people.model';
import { PeopleService } from '../services/people-service/people.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private peopleService = inject(PeopleService)
  private destroySub = inject(DestroyRef);

  isKpLoading = signal(false);
  kpError = signal("");
  keyPeople = signal<KeyPeople[] | undefined>(undefined);

  ngOnInit() {
    this.isKpLoading.set(true);

    const kpSub = this.peopleService.getKeyPeople().subscribe({
      next: (kpr: KeyPeopleResponse) => {
        this.keyPeople.set(kpr.data);
      },
      error: (err: Error) => {
        this.kpError.set(err.message);
      },
      complete: () => {
        this.isKpLoading.set(false);
      },
    });

    this.destroySub.onDestroy(() => {
      kpSub.unsubscribe();
    });
  }
}
