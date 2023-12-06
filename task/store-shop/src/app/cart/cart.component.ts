import { Component, OnInit } from '@angular/core';
import { Iitem } from '../models/items.interface';
import { CartService } from '../cart.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public selectedItem?: Iitem | null

  constructor(private cartservice: CartService) { }

  public deleteItem(item: any) {
    this.cartservice.removecartitem(item);
  }

  items: Iitem[] = []

  ngOnInit(): void {
    this.cartservice.getitems()
      .pipe(
        map((res) => {
          this.items = res;
          console.log(this.items)
        })
      ).subscribe()
  }

}