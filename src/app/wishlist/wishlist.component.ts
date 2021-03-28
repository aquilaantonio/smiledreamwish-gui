import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { WishService } from './../wish/wish.service';
import { Wish } from './../wish/wish.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishList: Array<Wish>;
  constructor(private wishService : WishService) {
    this.wishList = [];
   }

  ngOnInit() {
    this.listar();
  }

  listar(){

    this.wishService.listar().subscribe(response => this.wishList = response);
    this.wishList.forEach(element => {
      alert(element.descricao)
    });
  }

}
