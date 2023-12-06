import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Icaroaselcontext } from './inter/app-interface';

@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective implements OnInit {

  context: Icaroaselcontext | null = null;
  index: number = 0

  constructor(private templateref: TemplateRef<Icaroaselcontext>,
    private viewContainerRef: ViewContainerRef) { }

  @Input(`appCarouselFrom`) images!: string[]

  ngOnInit(): void {
    this.context = {
      image: this.images[0],
      controller: {
        next: () => this.next(),
        perv: () => this.privies()
      }
    }

    this.viewContainerRef.createEmbeddedView(this.templateref, this.context)
  }

  public next() {
    this.index++;
    if (this.index >= this.images.length) {
      this.index = 0
    }
    this.context!.image = this.images[this.index]
  }

  public privies() {
    this.index--;
    if (this.index < 0) {
      this.index = this.images.length - 1
    }
    this.context!.image = this.images[this.index]
  }
}
