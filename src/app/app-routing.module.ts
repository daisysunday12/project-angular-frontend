import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PekerjaanComponent } from './pekerjaan/pekerjaan.component';
import { NonFoundComponent } from './non-found/non-found.component';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'pekerjaan', component: PekerjaanComponent },
  { path: 'login', component: AuthComponent },
  { path: '**', component: NonFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
