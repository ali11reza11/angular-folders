import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorfulDirective } from './colorful.directive';
import { AppHilightDirective } from './app-hilight.directive';
import { CarouselDirective } from './carousel.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColorfulDirective,
    AppHilightDirective,
    CarouselDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
