import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { IncComponent } from './inc/inc.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'view-child';

  @ViewChild('par', { static: true, read: ElementRef }) par!: ElementRef;
  @ViewChild(IncComponent, { static: true, read: IncComponent }) incComp!: IncComponent;
  @ViewChildren(IncComponent, { read: IncComponent }) incomps!: QueryList<IncComponent>

  constructor(private rendener: Renderer2) { }
  public ngOnInit() {
    this.incComp.addnumber()
    // this.par.nativeElement.style.color = 'blue';   Not correct!!!!
    this.rendener.setStyle(this.par.nativeElement, 'color', 'red')
  }

  public ngAfterViewInit() {

    this.incomps.forEach((cop) => {
      cop.addnumber()
    })
  }
  public onclick(value: HTMLInputElement) {
    console.log(value.value);
  }
}
