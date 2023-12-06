import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { mockdata } from 'src/helpers/mockdata';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public http: HttpClient) { }
  title = 'observable3';
  ngOnInit(): void {
    of(mockdata).subscribe(console.log)
    this.http.get('assets/mockdata.json').subscribe(console.log)
    of(['name1', 'name2', 'name3']).subscribe(console.log)
    console.log(1)
  }
}
