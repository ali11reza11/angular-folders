import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHilight]'
})
export class AppHilightDirective {

  constructor(private elementref: ElementRef, private renderer: Renderer2) { }

  @Input() highlightColor: string = `yellow`


  @HostListener(`mouseenter`) onMouseEnter() {
    this.changeBackground(this.highlightColor)
  }

  @HostListener(`mouseleave`) onMouseOver() {
    this.changeBackground(`transParent`)
  }


  private changeBackground(color: string) {
    this.renderer.setStyle(this.elementref.nativeElement, `backgroundColor`, color)
  }

}
