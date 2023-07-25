import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { select, Store } from "@ngrx/store";
import * as fromUser from "@app/shared/store/user";
import { UserProfile } from "@app/shared/store/user";
import { Role } from "@app/shared/enums";

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {

  constructor(private store: Store) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.store.pipe(select(fromUser.getUser), map((user: UserProfile) => user?.role === Role.Admin));
  }
}
