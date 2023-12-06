import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription, count, interval } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public myObservablesubscription!: Subscription;

  myObservable = interval(100000);
  // myObservable = new Observable((observer) => {
  //   let count: number = 0;
  //   setInterval(() => {
  //     observer.next(count++)
  //     if (count === 5) {
  //       // observer.error(new Error('error'))
  //       // observer.complete()
  //     }
  //   }, 1000)
  // });
  ngOnInit(): void {
    this.myObservablesubscription = this.myObservable.subscribe(
      (val) => { console.log(val) },
      (err) => { console.log(err); },
      // () => { console.log('completed') }
    );
  }

  ngOnDestroy(): void {
    this.myObservablesubscription.unsubscribe()
  }
}
