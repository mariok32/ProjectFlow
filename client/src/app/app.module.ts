import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TaskService } from './services/task.service';
import { RuletaComponent } from './ruleta/ruleta.component';
import { BotonComponent } from './boton/boton.component';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ResultadoComponent } from './resultado/resultado.component';
import { ErrorComponent } from './error/error.component';


const appRoutes: Routes = [
  { path: 'inicio', component: BotonComponent },
  { path: 'juego',  component: RuletaComponent },
  { path: 'resultado',  component: ResultadoComponent },
  { path: 'error',component:ErrorComponent},

  { path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
 // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RuletaComponent,
    BotonComponent,
    ResultadoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
     // { enableTracing: true } // <-- debugging purposes only
    ),
    HttpModule,
    
    
    
  ],
  providers: [
    TaskService

   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
