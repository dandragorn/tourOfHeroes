import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesListComponent } from './Components/heroesList/heroesList.component';
import {FormsModule} from "@angular/forms";
import { HeroDetailComponent } from './Components/heroesList/hero-detail/hero-detail.component';
import { MessagesComponent } from './Components/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
    imports: [
      HttpClientModule,
      BrowserModule,
      FormsModule,
      AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
