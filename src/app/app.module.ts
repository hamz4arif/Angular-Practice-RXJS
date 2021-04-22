import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncludesComponent } from './includes/includes.component';
import { PromiseComponent } from './promise/promise.component';
import { ListComponent } from './Observable/list/list.component';
import { FromEventComponent } from './Observable/from-event/from-event.component';
import { ObservableComponent } from './observable/observable.component';
import { IntervalComponent } from './Observable/interval/interval.component';
import { OfandfromComponent } from './Observable/ofandfrom/ofandfrom.component';
import { ToarrayComponent } from './Observable/toarray/toarray.component';
import { CustomobsComponent } from './Observable/customobs/customobs.component';

@NgModule({
  declarations: [
    AppComponent,
    IncludesComponent,
    PromiseComponent,
    ListComponent,
    FromEventComponent,
    ObservableComponent,
    IntervalComponent,
    OfandfromComponent,
    ToarrayComponent,
    CustomobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
