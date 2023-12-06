import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../cart.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cartservice: CartService) { }

  public toalItem: number = 0;

  ngOnInit(): void {
    this.cartservice.getitems().pipe(
      map(res => {
        this.toalItem = res.length;
      })
    ).subscribe()
  }
}
