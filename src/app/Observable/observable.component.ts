import { Component, OnInit } from '@angular/core';
import { interval, Subscription, } from 'rxjs';
import {toArray,take} from 'rxjs/operators'

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  subscriber:Subscription;

  constructor() { }

  ngOnInit(): void {
    let obs=interval(1000);
    this.subscriber=obs.pipe(
      take(5),
      toArray(),
      ).subscribe(res=>{
      // console.log(res)
    })
  }

}
