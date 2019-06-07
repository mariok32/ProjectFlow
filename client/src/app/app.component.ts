import { Component, OnInit,  } from '@angular/core';
import { TaskService } from './services/task.service';
import { bloomHasToken } from '@angular/core/src/render3/di';
import { ActivatedRoute, Params, Router, Routes } from '@angular/router';
import { paramss} from './interfaces/params';
import {Config} from './interfaces/config';
import * as Winwheel from 'Winwheel';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit{
  title = 'angular-http-client';
  label='Ruleta';
  invitation:string;
  validation:string;
  config: Config;
 

  constructor(
    private taskService: TaskService,
    private rutaActiva: ActivatedRoute,
    private router: Router,
    

    
  ) {
  
  }

  ngOnInit() {
 
    this.rutaActiva.queryParams.subscribe(params => {
      this.invitation=params.invitation;
      this.validation=params.validation;

   });
  
   (async () => { 
    // Do something before delay
 
      await this.delay(1000);
      localStorage.setItem("validation",this.validation);
      localStorage.setItem("invitation",this.invitation);

    })();

  }

  
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
    }

}




