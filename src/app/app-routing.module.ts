import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PekerjaanComponent } from './pekerjaan/pekerjaan.component';
import { NonFoundComponent } from './non-found/non-found.component';
import { AuthComponent } from './auth/auth.component';
import { LamarPekerjaanComponent } from './lamar-pekerjaan/lamar-pekerjaan.component';
import { LamarPekerjaan1Component } from './lamar-pekerjaan1/lamar-pekerjaan1.component';
import { LamarPekerjaan2Component } from './lamar-pekerjaan2/lamar-pekerjaan2.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'pekerjaan', component: PekerjaanComponent },
  { path: 'lamar-pekerjaan/:id', component: LamarPekerjaanComponent },
  { path: 'uploadimage-pekerjaan/:id', component: LamarPekerjaan1Component },
  { path: 'uploadfile-pekerjaan/:id', component: LamarPekerjaan2Component },
  { path: 'success', component: SuccessComponent },
  { path: 'login', component: AuthComponent },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '**', component: NonFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
