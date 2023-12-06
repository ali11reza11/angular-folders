import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color = 'red';
  images: string[] = ['/assest/1.jpg', '/assest/2.jpg', '/assest/3.jpg']
}
