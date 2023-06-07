import * as fromActions from "./catalog.actions";
import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  DocumentChangeAction,
} from "@angular/fire/compat/firestore";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, Observable, of, switchMap, take, zip } from "rxjs";
import { FirebaseCollections } from "@app/shared/constants/firebase-collections";
import { CatalogItem } from "@app/shared";
import { Catalog } from "@app/shared/store/catalog/catalog.models";

type Action = fromActions.All;
const documentToItem = (x: DocumentChangeAction<any>): CatalogItem => {
  const data = x.payload.doc.data();
  return {
    id: x.payload.doc.id,
    ...data,
  };
};

@Injectable()
export class CatalogEffects {
  constructor(private actions: Actions, private afs: AngularFirestore) {}

  read$: Observable<Action> = createEffect(() => {
    return this.actions.pipe(
      ofType(fromActions.Types.READ),
      switchMap(() => {
        return zip(
          this.afs
            .collection(FirebaseCollections.PRODUCTS)
            .snapshotChanges()
            .pipe(
              take(1),
              map((items: DocumentChangeAction<CatalogItem>[]) =>
                items.map((item: DocumentChangeAction<CatalogItem>) =>
                  documentToItem(item)
                )
              )
            ),
          this.afs
            .collection(FirebaseCollections.SERVICES)
            .snapshotChanges()
            .pipe(
              take(1),
              map((items: DocumentChangeAction<CatalogItem>[]) =>
                items.map((item: DocumentChangeAction<CatalogItem>) =>
                  documentToItem(item)
                )
              )
            ),
          this.afs
            .collection(FirebaseCollections.MATERIALS)
            .snapshotChanges()
            .pipe(
              take(1),
              map((items: DocumentChangeAction<CatalogItem>[]) =>
                items.map((item: DocumentChangeAction<CatalogItem>) =>
                  documentToItem(item)
                )
              )
            )
        ).pipe(
          map(
            ([products, services, materials]: [
              CatalogItem[],
              CatalogItem[],
              CatalogItem[]
            ]) => {
              const catalog: Catalog = {
                products,
                services,
                materials,
              };
              return new fromActions.ReadSuccess(catalog);
            }
          ),
          catchError((err) => of(new fromActions.ReadFail(err.message)))
        );
      })
    );
  });
}
