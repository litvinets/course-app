import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as fromActions from "./user.actions";
import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import {
  catchError,
  from,
  map,
  Observable,
  of,
  switchMap,
  take,
  tap,
} from "rxjs";
import { EmailPasswordCredentials } from "@app/shared/store/user/user.models";
import { getAuth, sendEmailVerification } from "firebase/auth";
import firebase from "firebase/compat";
import UserCredential = firebase.auth.UserCredential;
import { environment } from "../../../../environments/environment";
import { User } from "./user.models";

type Action = fromActions.All;

@Injectable()
export class UserEffects {
  constructor(
    private actions: Actions,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {}

  init$: Observable<Action> = createEffect(() => {
    return this.actions.pipe(
      ofType(fromActions.Types.INIT),
      switchMap(() => this.afAuth.authState.pipe(take(1))),
      switchMap((authState: firebase.User) => {
        if (authState) {
          return this.afs
            .doc<User>(`users/${authState.uid}`)
            .valueChanges()
            .pipe(
              take(1),
              map(
                (user: User) =>
                  new fromActions.InitAuthorized(authState.uid, user || null)
              ),
              catchError((err) => of(new fromActions.InitError(err.message)))
            );
        } else {
          return of(new fromActions.InitUnauthorized());
        }
      })
    );
  });

  signInEmail$: Observable<Action> = createEffect(() => {
    return this.actions.pipe(
      ofType(fromActions.Types.SIGN_IN_EMAIL),
      map((action: fromActions.SignInEmail) => action.credentials),
      switchMap((credentials: EmailPasswordCredentials) =>
        from(
          this.afAuth.signInWithEmailAndPassword(
            credentials.email,
            credentials.password
          )
        ).pipe(
          switchMap((signInState: UserCredential) =>
            this.afs
              .doc<User>(`users/${signInState.user.uid}`)
              .valueChanges()
              .pipe(
                take(1),
                tap(() => this.router.navigate(["/"])),
                map(
                  (user: User) =>
                    new fromActions.SignInEmailSuccess(
                      signInState.user.uid,
                      user || null
                    )
                )
              )
          ),
          catchError((error) =>
            of(new fromActions.SignInEmailFail(error.message))
          )
        )
      )
    );
  });

  signUpEmail$: Observable<Action> = createEffect(() => {
    return this.actions.pipe(
      ofType(fromActions.Types.SIGN_UP_EMAIL),
      map((action: fromActions.SignUpEmail) => action.credentials),
      switchMap((credentials: EmailPasswordCredentials) =>
        from(
          this.afAuth.createUserWithEmailAndPassword(
            credentials.email,
            credentials.password
          )
        ).pipe(
          tap(() => {
            const auth = getAuth();
            sendEmailVerification(
              auth.currentUser,
              environment.firebase.actionCodeSetting
            );
            this.router.navigate(["/email-confirmation"]);
          }),
          map(
            (signUpState: UserCredential) =>
              new fromActions.SignUpEmailSuccess(signUpState.user.uid)
          ),
          catchError((error) =>
            of(new fromActions.SignUpEmailFail(error.message))
          )
        )
      )
    );
  });

  signOut$: Observable<Action> = createEffect(() => {
    return this.actions.pipe(
      ofType(fromActions.Types.SIGN_OUT),
      switchMap(() =>
        from(this.afAuth.signOut()).pipe(
          map(() => new fromActions.SignOutSuccess()),
          catchError((error) => of(new fromActions.SignOutFail(error.message)))
        )
      )
    );
  });
}
