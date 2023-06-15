import { CatalogItemModel } from "@app/shared";

export interface Catalog {
  products: CatalogItemModel[];
  materials: CatalogItemModel[];
  services: CatalogItemModel[];
}
