import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  productList: string [] = [
    'Плакати',
    'Оракал',
    'Банери',
    'Візитки',
    'Листівки',
    'Екстендери',
    'Бренд-Вол',
    'Меню',
    'Сіті-лайти',
    'Скролл',
    'Лайтбокс',
    'Метролайти',
    'Композит',
    'Брендування машин',
    'Стенди',
    'Розтяжки банерні',
    'Таблички',
    'Вивіски',
    'Вказівники, стрілки',
    'Оформлення вітрин, вікон',
    'Реклама на стовпах',
    'Об’ємні букви'
]

  constructor() { }

  ngOnInit(): void {
  }

}
