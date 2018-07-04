import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { map, take } from 'rxjs/operators';
import { DashboardComponent } from './sistema/dashboard/components/dashboard.component';
import { TemplateComponent } from './sistema/template/template.component';
import { NotfoundComponent } from './sistema/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TemplateComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
