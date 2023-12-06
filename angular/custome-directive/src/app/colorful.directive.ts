import { Directive, HostBinding, HostListener } from '@angular/core';
@Directive({
  selector: '[appColorful]'
})
export class ColorfulDirective {

  availablecolor = [
    `blue`, `red`, `green`, `gray`,
  ]
  @HostBinding('style.color') color?: string
  @HostBinding('style.borderColor') borderColor?: string
  @HostListener('keydown') newColor() {
    const randomIndex = Math.floor(Math.random() * this.availablecolor.length);
    this.color = this.borderColor = this.availablecolor[randomIndex];
  }
}
