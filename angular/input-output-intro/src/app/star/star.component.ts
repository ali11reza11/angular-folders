import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
  @Input() rating: number = 3.5;
  @Output() starClicked = new EventEmitter<number>();
  width: number = 90;

  ngOnInit(): void {
    this.width = this.rating * 90 / 5
  }

  public onClick() {
    this.starClicked.emit(this.rating)
  }
}
