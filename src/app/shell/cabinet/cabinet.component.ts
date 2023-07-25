import { Component, OnInit } from '@angular/core';
import * as fromUser from "@app/shared/store/user";
import { Store } from "@ngrx/store";
import { debounceTime, Observable, Subject, take, takeUntil } from "rxjs";
import { UserProfile, User } from "@app/shared/store/user";
import { Role } from "@app/shared/enums";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent implements OnInit {
  readonly UserRole = Role;

  user: UserProfile;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private store: Store,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.store
      .select(fromUser.getUser)
      .pipe(takeUntil(this.destroy$))
      .subscribe((user: UserProfile) => this.user = user);
  }
}
