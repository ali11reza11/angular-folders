import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngContent';


  @ViewChild('par') par!: ElementRef


  public changeText() {
    this.par.nativeElement.textContent = `12344`
  }
}
