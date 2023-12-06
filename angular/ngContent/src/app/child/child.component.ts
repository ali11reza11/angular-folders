import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterContentInit, AfterContentChecked {

  @ContentChild('par', { static: true }) par!: ElementRef;

  ngOnInit(): void {
    console.log("ngOnInit : " + this.par.nativeElement.textContent)
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit : " + this.par.nativeElement.textContent)
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked : " + this.par.nativeElement.textContent)

  }
}
