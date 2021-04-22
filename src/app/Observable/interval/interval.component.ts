import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {
obsMsg;
videoSubscription:Subscription;
videoSubscription2:Subscription;
// interVal timer
intervalTime=1000;
delayTime=6000;

  constructor(private ser:DesignUtilityService) { }

  ngOnInit(): void {
    const broadcast=interval(this.intervalTime);
    const broadcast2=timer(this.delayTime,this.intervalTime);
    

    this.videoSubscription=broadcast.subscribe(res=>{
      console.log(res)
      this.obsMsg="video "+res;
      this.ser.print(this.obsMsg,"elContainer")
      if(res>=5){
        this.videoSubscription.unsubscribe();
      }
    })
    this.videoSubscription2=broadcast2.subscribe(res=>{
      console.log(res)
      this.obsMsg="video "+res;
      this.ser.print(this.obsMsg,"elContainer2")
      if(res>=5){
        this.videoSubscription2.unsubscribe();
      }
    })
  }

}
