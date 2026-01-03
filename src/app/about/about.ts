import { Component, DestroyRef, inject, signal } from '@angular/core';
import { PeopleService } from '../services/people-service/people.service';
import { KeyPeople, KeyPeopleResponse } from '../models/key-people.model';
import { Members } from '../models/members.model';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  private peopleService = inject(PeopleService)
  private destroySub = inject(DestroyRef);
  isKpLoading = signal(false);
  isMemLoading = signal(false);
  kpError = signal("");
  mError = signal("");
  keyPeople = signal<KeyPeople[] | undefined>(undefined);
  members = signal<string[] | undefined>(undefined);
  membersDesc = signal<string | undefined>(undefined);

  ngOnInit() {
    this.isKpLoading.set(true);
    this.isMemLoading.set(true);

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

    const mSub = this.peopleService.getMembers().subscribe({
      next: (members: Members) => {
        this.membersDesc.set(members.longDescription ?? undefined);
        this.members.set(members.data);
      },
      error: (err: Error) => {
        this.mError.set(err.message);
      },
      complete: () => {
        this.isMemLoading.set(false);
      }
    })

    this.destroySub.onDestroy(() => {
      kpSub.unsubscribe();
      mSub.unsubscribe();
    });
  }
}
