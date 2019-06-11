import { Component, OnInit,  } from '@angular/core';
import { TaskService } from './services/task.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';

import {Config} from './interfaces/config';


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
 
      await this.delay(10);
      
      if (this.validation ==undefined && this.invitation ==undefined)
      {
  
        this.router.navigate(['error']);
      }
      localStorage.setItem("validation",this.validation);
      localStorage.setItem("invitation",this.invitation);
      
    })();

  }

  
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
    }

}




