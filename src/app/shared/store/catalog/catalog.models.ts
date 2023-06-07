import { CatalogItem } from "@app/shared";

export interface Catalog {
  products: CatalogItem[];
  materials: CatalogItem[];
  services: CatalogItem[];
}
