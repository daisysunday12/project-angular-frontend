import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPrintModule } from 'ngx-print';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PekerjaanComponent } from './pekerjaan/pekerjaan.component';
import { NonFoundComponent } from './non-found/non-found.component';
import { AuthComponent } from './auth/auth.component';
import { LamarPekerjaanComponent } from './lamar-pekerjaan/lamar-pekerjaan.component';
import { LamarPekerjaan1Component } from './lamar-pekerjaan1/lamar-pekerjaan1.component';
import { LamarPekerjaan2Component } from './lamar-pekerjaan2/lamar-pekerjaan2.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PekerjaanComponent,
    NonFoundComponent,
    AuthComponent,
    LamarPekerjaanComponent,
    LamarPekerjaan1Component,
    LamarPekerjaan2Component,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPrintModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    AgGridModule,
    CKEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
