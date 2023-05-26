import { Component } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { CatalogItem } from "@app/shared";

@Component({
  selector: "app-catalog",
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.scss"],
  providers: [MatExpansionModule],
})
export class CatalogComponent {
  productList: CatalogItem[] = [
    { title: "Плакати" },
    { title: "Оракал" },
    { title: "Банери" },
    { title: "Візитки" },
    { title: "Листівки" },
    { title: "Екстендери" },
    { title: "Бренд-Вол" },
    { title: "Меню" },
    { title: "Сіті-лайти" },
    { title: "Скролл" },
    { title: "Лайтбокс" },
    { title: "Метролайти" },
    { title: "Композит" },
    { title: "Брендування машин" },
    { title: "Стенди" },
    { title: "Розтяжки банерні" },
    { title: "Таблички" },
    { title: "Вивіски" },
    { title: "Вказівники, стрілки" },
    { title: "Оформлення вітрин, вікон" },
    { title: "Реклама на стовпах" },
    { title: "Об’ємні букви" },
  ];

  serviceList: CatalogItem[] = [
    {
      title: "Додрукарська підготовка",
      details: ["Розробка макету", "Ретушування фотографій"],
    },
    {
      title: "Широкоформатний друк",
      details: [
        "Інтерєрний друк",
        "Друк на плівці",
        "Друк на банері",
        "Друк на папері",
      ],
    },
    {
      title: "Післядрукарські послуги",
      details: ["Встановлення люверсів", "Плотерна порізка"],
    },
    { title: "Поклейка бордів, скроллерів і тд" },
  ];

  materialList: CatalogItem[] = [
    { title: "Банер ламінований" },
    { title: "Бумага плакатна citylight" },
    { title: "Бумага вологостійка bluback" },
    { title: "Банерна сітка" },
    { title: "Плівка біла" },
    { title: "Плівка прозора" },
    { title: "Плівка перфорированая" },
  ];
}
