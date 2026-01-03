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

  aboutHeadline = "Anandanagar Sanskriti Unnayan Samity is a community-based cultural organization. It focuses on preserving and promoting regional art, culture, and heritage through local festivals, educational programs, and community initiatives that strengthen neighborhood cultural identity.";
  culturalActivities = "Anandanagar Sanskriti Unnayan Samity organizes annual cultural events, including music, dance, and drama performances. It often collaborates with local artists and schools to host art exhibitions, talent showcases, and heritage awareness drives that highlight Bengal's folk traditions and contemporary creativity.";
  communityEng = "The organization emphasizes inclusive participation, especially among youth and marginalized groups. Through workshops and educational outreach, it encourages skills development in art, literature, and performance, aiming to foster community pride and social cohesion.";
  impact = "Within Kolkata’s vibrant cultural network, Anandanagar Sanskriti Unnayan Samity contributes to sustaining neighborhood-level cultural life. Its activities support regional identity, civic engagement, and continuity of Bengal’s diverse cultural practices in a rapidly urbanizing environment.";

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
