import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomobsComponent } from './Observable/customobs/customobs.component';
import { FromEventComponent } from './Observable/from-event/from-event.component';
import { IntervalComponent } from './Observable/interval/interval.component';
import { ListComponent } from './Observable/list/list.component';
import { ObservableComponent } from './observable/observable.component';
import { OfandfromComponent } from './Observable/ofandfrom/ofandfrom.component';
import { ToarrayComponent } from './Observable/toarray/toarray.component';
import { PromiseComponent } from './promise/promise.component';


const routes: Routes = [
  {path:"promise",component:PromiseComponent},
  {path:"observeable",component:ObservableComponent,children:[
    {path:"",component:ListComponent},
    {path:"fromevent",component:FromEventComponent},
    {path:"interval",component:IntervalComponent},
    {path:"ofandfrom",component:OfandfromComponent},
    {path:"toarray",component:ToarrayComponent},
    {path:"customobs",component:CustomobsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
