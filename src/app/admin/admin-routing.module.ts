import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PekerjaanComponent } from './pekerjaan/pekerjaan.component';
import { NonFoundComponent } from '../non-found/non-found.component';
import { PekerjaanFormComponent } from './pekerjaan-form/pekerjaan-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pekerjaan', component: PekerjaanComponent },
  { path: 'create-pekerjaan', component: PekerjaanFormComponent },
  { path: '**', component: NonFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
