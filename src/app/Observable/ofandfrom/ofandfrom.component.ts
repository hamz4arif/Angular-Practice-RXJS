import { Component, OnInit } from '@angular/core';
import { from, of, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/design-utility.service';

@Component({
  selector: 'app-ofandfrom',
  templateUrl: './ofandfrom.component.html',
  styleUrls: ['./ofandfrom.component.scss']
})
export class OfandfromComponent implements OnInit {
subscriber:Subscription;
subscriber2:Subscription;
subscriber3:Subscription;
subscriber4:Subscription;



obsMsg;
  constructor(private ser:DesignUtilityService) { }

  ngOnInit(): void {
    let obs=of("Hamza","Asad","Haseeb");
    let obs2=of({a:"Hamza",b:"Asad",c:"Haseeb"})
    let obs3=from(["Hamza","Asad","Haseeb"]);
    

    this.subscriber=obs.subscribe((res)=>{
      // console.log(res)
      this.ser.print(res,"elContainer");
      
    })
    this.subscriber2=obs2.subscribe((res)=>{
      // console.log(res)
      this.obsMsg=res;
      
    })
this.subscriber3=obs3.subscribe(res=>{
  this.ser.print(res,"elContainer3")
})
let promise=new Promise(resolve=>{
  setTimeout(() => {
    resolve("Promise Resolve")
  }, 3000);
})
let obs4=from(promise);
this.subscriber4=obs4.subscribe(res=>{
  this.ser.print(res,"elContainer4")
})


  }

}
