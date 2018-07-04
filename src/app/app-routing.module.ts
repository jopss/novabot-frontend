import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './sistema/dashboard/components/dashboard.component';
import { TemplateComponent } from './sistema/template/template.component';
import { NotfoundComponent } from './sistema/notfound/notfound.component';

const routes: Routes = [
  { path: 'home', redirectTo: 'admin/dashboard' },
  { path: 'admin', component: TemplateComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent }
  ]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  declarations: [
  ],
  exports: [
    RouterModule 
  ]
})
export class AppRoutingModule { }
