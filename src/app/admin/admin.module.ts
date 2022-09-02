import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PekerjaanComponent } from './pekerjaan/pekerjaan.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PekerjaanComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgApexchartsModule,
    AgGridModule,
  ]
})
export class AdminModule { }
