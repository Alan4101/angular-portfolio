import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { CardModule} from 'primeng/card';

import { HeaderComponentComponent } from './client-component/header-component/header-component.component';
import { WorkItemsComponent } from './client-component/work-items/work-items.component';
import { ContactComponent } from './client-component/contact/contact.component';
import { SliderCComponent } from './client-component/slider-c/slider-c.component';
//firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule} from "@angular/fire/database";
import { environment } from "../environments/environment";
import { FirestoreSettingsToken} from '@angular/fire/firestore';
//admin component
import { AdminComponent } from './admin-component/admin/admin.component';
import { PostComponent } from './admin-component/post/post.component';
import { PostListComponent } from './admin-component/post-list/post-list.component';
import { SocialLinkComponent } from './client-component/social-link/social-link.component'

import {AngularFirestore} from "@angular/fire/firestore";

import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    WorkItemsComponent,
    ContactComponent,
    SliderCComponent,
    AdminComponent,
    PostComponent,
    PostListComponent,
    SocialLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      BrowserAnimationsModule,
      NgbModule,
      FormsModule,
      RouterModule,
      CardModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
      ReactiveFormsModule,
      MenuItem, PanelMenuModule
  ],
  providers: [
      { provide: FirestoreSettingsToken, useValue: {} },
      AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
