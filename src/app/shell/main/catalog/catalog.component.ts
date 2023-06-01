import { Component, OnInit } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { CatalogItem } from "@app/shared";
import {
  AngularFirestore,
  DocumentChangeAction,
} from "@angular/fire/compat/firestore";
import { combineLatest } from "rxjs";
import { FirebaseCollections } from "@app/shared/constants/firebase-collections";

@Component({
  selector: "app-catalog",
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.scss"],
  providers: [MatExpansionModule],
})
export class CatalogComponent implements OnInit {
  productList: CatalogItem[];
  serviceList: CatalogItem[];
  materialList: CatalogItem[];

  constructor(private afs: AngularFirestore) {}

  ngOnInit(): void {
    this.getCatalogData();
  }

  private getCatalogData(): void {
    combineLatest([
      this.afs.collection(FirebaseCollections.PRODUCTS).snapshotChanges(),
      this.afs.collection(FirebaseCollections.SERVICES).snapshotChanges(),
      this.afs.collection(FirebaseCollections.MATERIALS).snapshotChanges(),
    ]).subscribe(
      ([products, services, materials]: [
        DocumentChangeAction<CatalogItem>[],
        DocumentChangeAction<CatalogItem>[],
        DocumentChangeAction<CatalogItem>[]
      ]) => {
        this.productList = this.mapDataResult(products);
        this.serviceList = this.mapDataResult(services);
        this.materialList = this.mapDataResult(materials);
      }
    );
  }

  private mapDataResult(
    items: DocumentChangeAction<CatalogItem>[]
  ): CatalogItem[] {
    return items.map((item: DocumentChangeAction<CatalogItem>) =>
      item.payload.doc.data()
    );
  }
}
