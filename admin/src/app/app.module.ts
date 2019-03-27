import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'


import { PointFormComponent } from './point-form/point-form.component';
import { TaskService } from './services/task.service';

@NgModule({
  declarations: [
    
    AppComponent,
    
    PointFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
