import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input-output-intro';
  ratings: number[] = [
    3.5, 4, 1, 4.1
  ]

  public onStarClicked(rating: number) {
    console.log(`the rating ${rating} is clicked`)
  }
}
