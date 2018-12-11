import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { TimeAggregateSelectionComponent } from './time-aggregate-selection/time-aggregate-selection.component';
import { element } from 'protractor';

@NgModule({
  declarations: [
    TimeAggregateSelectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [TimeAggregateSelectionComponent]
})

export class AppModule { 
  constructor(private injector: Injector) {    
  }

  ngDoBootstrap() {
    const element = createCustomElement(TimeAggregateSelectionComponent, {
      injector: this.injector
    });

    customElements.define('time-aggregate-selection', element);
  }
}
