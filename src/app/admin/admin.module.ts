import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as $ from 'jquery';

import { AdminRoutingModule } from './admin-routing.module';
import { KandidatComponent } from './kandidat/kandidat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PekerjaanComponent } from './pekerjaan/pekerjaan.component';
import { PekerjaanFormComponent } from './pekerjaan-form/pekerjaan-form.component';
import { PekerjaanDetailsComponent } from './pekerjaan-details/pekerjaan-details.component';
import { PekerjaanUploadFileComponent } from './pekerjaan-upload-file/pekerjaan-upload-file.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PekerjaanComponent,
    PekerjaanFormComponent,
    PekerjaanUploadFileComponent,
    PekerjaanDetailsComponent,
    KandidatComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgApexchartsModule,
    AgGridModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
