import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PekerjaanComponent } from './pekerjaan/pekerjaan.component';
import { PekerjaanFormComponent } from './pekerjaan-form/pekerjaan-form.component';
import { PekerjaanUploadFileComponent } from './pekerjaan-upload-file/pekerjaan-upload-file.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PekerjaanComponent,
    PekerjaanFormComponent,
    PekerjaanUploadFileComponent
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
