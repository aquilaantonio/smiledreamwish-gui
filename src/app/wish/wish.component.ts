import { Component, OnInit } from '@angular/core';
import { Wish } from './../wish/wish.model';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css'],
})
export class WishComponent implements OnInit {
  wish: Wish = new Wish('', new Date(), new Date(), '', '', 0);
  constructor() {}

  ngOnInit(): void {}
  salvar(event: Event) {
    console.log('Evento: ', event);

  }
}
