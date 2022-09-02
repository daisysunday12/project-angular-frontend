import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PekerjaanComponent } from './pekerjaan/pekerjaan.component';
import { NonFoundComponent } from './non-found/non-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PekerjaanComponent,
    NonFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
