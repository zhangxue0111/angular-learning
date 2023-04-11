import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval, Observer } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstSubscription : Subscription;

  constructor() {

  }

  ngOnInit(): void {
    // this.firstSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
      
    // });

    const customIntervalObservable = Observable.create((observer:Observer<String>) => {
      let count = 0;
      setInterval(() => {
        observer.next(count.toString());
        if(count == 2) {
          observer.complete();
        }
        if(count > 3) {
          observer.error(new Error("count is greater than 3!"));
        }
        count++;
      }, 1000);
    });

    this.firstSubscription = customIntervalObservable.pipe(
      filter((data:number) => {
        return data > 0;
      }), map((data: number) => {
        return "Round: " + data;
      }))
      .subscribe((data:Observer<String>) => {
      console.log(data);
    }, (error:Observer<String>) => {
      console.log(error);
    }, () => {
      console.log("Completed!");
      
    });
  }

  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe();
  }

}
