import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import {CardModule} from 'primeng/card';

import { HeaderComponentComponent } from './header-component/header-component.component';
import { WorkItemsComponent } from './work-items/work-items.component';
import { ContactComponent } from './contact/contact.component';
import { SliderCComponent } from './slider-c/slider-c.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    WorkItemsComponent,
    ContactComponent,
    SliderCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      BrowserAnimationsModule,
      NgbModule,
      FormsModule,
      RouterModule,
      CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
