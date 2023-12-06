import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { map, tap } from 'rxjs';
import { Iitem } from '../models/items.interface';
import { ActivatedRoute, Route } from '@angular/router';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  itemCartService: any;
  constructor(private serviceapi: GetdataService, private route: ActivatedRoute, private carservice: CartService) { }

  public items!: Iitem[];
  public selectedId!: number;
  public selectedItem?: Iitem;
  public isitemfound: boolean = true;
  public width?: number;
  public ratenum?: number;



  ngOnInit(): void {
    this.serviceapi.getapi().pipe(
      map(res => this.items = res),
      map(() => {
        this.selectedId = +this.route.snapshot.params['id'];
        this.selectedItem = this.items?.find(item => item.id === this.selectedId);
        if (!this.selectedItem) {
          this.isitemfound = false
        };
      }),
      map(() => {
        this.width = this.items[this.selectedId].rating.rate * 90 / 5;
        this.ratenum = this.items[this.selectedId].rating.rate
      }),
    ).subscribe()
  }


  public addtocart() {
    this.carservice.addtocart(this.items[this.selectedId - 1])
  }
}

