import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { TaskService } from './services/task.service';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { Ng5SliderModule } from 'ng5-slider';



const appRoutes: Routes = [
  { path: 'admin',      component: AdminComponent },
  { path: 'login',      component: LoginComponent },

  { path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
];



@NgModule(
  {
    imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      Ng5SliderModule,
      RouterModule.forRoot(
        appRoutes,
       // { enableTracing: true } // <-- debugging purposes only
      )
      
    ],

  declarations: [
    
    AppComponent,
    
    AdminComponent,
    
    LoginComponent
  ],
  

  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
