import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AdminRoutingModule } from './admin-routing.module';
import { KandidatComponent } from './kandidat/kandidat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PekerjaanComponent } from './pekerjaan/pekerjaan.component';
import { PekerjaanFormComponent } from './pekerjaan-form/pekerjaan-form.component';
import { PekerjaanDetailsComponent } from './pekerjaan-details/pekerjaan-details.component';
import { PekerjaanUploadFileComponent } from './pekerjaan-upload-file/pekerjaan-upload-file.component';
import { KandidatPreviewComponent } from './kandidat-preview/kandidat-preview.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PekerjaanComponent,
    PekerjaanFormComponent,
    PekerjaanUploadFileComponent,
    PekerjaanDetailsComponent,
    KandidatComponent,
    KandidatPreviewComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgApexchartsModule,
    AgGridModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule,
    PdfViewerModule
  ]
})
export class AdminModule { }
