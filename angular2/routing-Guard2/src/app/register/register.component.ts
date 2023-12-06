import { Component, ElementRef, ViewChild } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CanComponentDeactive } from '../deactivate.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements CanComponentDeactive {
  @ViewChild('input') input!: ElementRef;
  constructor() { }
  CanDeactive(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.input.nativeElement.value !== '') {
      return confirm('dfkjdf')
    } else {
      return true
    }
  }

}
