import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }
  print(val,id){
    let el =document.createElement("li");
    el.innerText=val;
    document.getElementById(id).append(el);
  }
}
