import { Component, OnInit } from '@angular/core';
import { Observable,  } from 'rxjs';

@Component({
  selector: 'app-customobs',
  templateUrl: './customobs.component.html',
  styleUrls: ['./customobs.component.scss']
})
export class CustomobsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const obs=Observable.create(observer=>{
      observer.next("data Emit");
      observer.next("data Emit 2")
      observer.next("data Emit 3")
      observer.next("data Emit 4")
    })
    obs.subscribe((res)=>{
      console.log(res)
    })
  }
  

}
