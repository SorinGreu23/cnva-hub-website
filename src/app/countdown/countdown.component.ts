import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit, OnDestroy {
  private subscription: Subscription | any;

  public dateNow = new Date();
  public dDay = new Date('Feb 06 2022 23:59:59');
  msInSecond = 1000;
  hoursInDay = 24;
  minInHour = 60;
  secInMin = 60;

  public timeDifference: any;
  public secondsToDday: any;
  public minutesToDday: any;
  public hoursToDday: any;
  public daysToDday: any;

  private getTimeDifference() {
    this.timeDifference = this.dDay.getTime() - new Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits(timeDifference: number) {
    this.secondsToDday = Math.floor(
      (this.timeDifference / this.msInSecond) % this.secInMin
    );
    this.minutesToDday = Math.floor(
      (timeDifference / (this.msInSecond * this.minInHour)) % this.secInMin
    );
    this.hoursToDday = Math.floor(
      (timeDifference / (this.msInSecond * this.minInHour * this.secInMin)) %
        this.hoursInDay
    );
    this.daysToDday = Math.floor(
      timeDifference /
        (this.msInSecond * this.minInHour * this.secInMin * this.hoursInDay)
    );
  }

  ngOnInit(): void {
    this.subscription = interval(1000).subscribe((x) => {
      this.getTimeDifference();
    });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
