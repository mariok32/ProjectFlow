import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskService } from './services/task.service';
import { RuletaComponent } from './ruleta/ruleta.component';
import { BotonComponent } from './boton/boton.component';


@NgModule({
  declarations: [
    AppComponent,
    RuletaComponent,
    BotonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    
  ],
  providers: [
    TaskService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
