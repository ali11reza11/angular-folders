import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { map, tap } from 'rxjs'
import { Iitem } from '../models/items.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public apiserv: GetdataService) { }
  public dataArr!: Iitem[];
  ngOnInit(): void {
    const res = {
      data: [],
      statusCode: 200
    }
    this.apiserv.getapi().pipe(
      map(res => this.dataArr = res),
      tap(i => console.log(i))
    ).subscribe()
  }
}
