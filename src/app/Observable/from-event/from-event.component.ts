import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements OnInit {
  constructor() {}
  @ViewChild('addbtn') addbtn: ElementRef;

  ngOnInit(): void {}
  ngAfterViewInit() {
    let count=1;
    fromEvent(this.addbtn.nativeElement, 'click').subscribe((res) => {
      let val="video "+count++;
      console.log(val);
      this.print(val,"elContainer")
      this.print(val,"elContainer2")
    });
  }
  print(val,id){
    let el =document.createElement("li");
    el.innerText=val;
    document.getElementById(id).append(el);
  }
}
