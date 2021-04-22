import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {
data;
  constructor() { }
  dellAvailable(){
  return false
  }
  hpAvailable(){
   return false;
  }
  myFunction(){
      console.log("button clicked");
  }
  ngOnInit(): void {
    
    let buyLaptop=new Promise((resolve,reject)=>{
// resolve("Promise Resolved")
 // reject("promise is Rejected")
 if(this.dellAvailable()){
  return  setTimeout(() => {
    resolve("dell is available")
  }, 3000);
 }
 else if(this.hpAvailable()){
  return  setTimeout(() => {
    resolve("HP is available")
  }, 3000);
 }
 else{
   reject("NOthign Available")
 }
    });
    buyLaptop.then(res=>{
      this.data=res;
      console.log(res)
    }).catch(err=>{
      this.data=err;
      console.log(err)
    })
  }

}
