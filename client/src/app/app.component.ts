import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { bloomHasToken } from '@angular/core/src/render3/di';
import { ActivatedRoute, Params, Router, Routes } from '@angular/router';
import { paramss} from './interfaces/params';
import {Config} from './interfaces/config';
import * as Winwheel from 'Winwheel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit{
  title = 'angular-http-client';
  label='Hazme click para saber cuantos puntos tienes';
  invitation:string;
  validation:string;
  config: Config;


  private token: string;
  myWheel:Winwheel;
  private wheelSpinning = false;

  constructor(
    private taskService: TaskService,
    private rutaActiva: ActivatedRoute,
    private router: Router,
    

    
  ) {
  
  }

  ngOnInit() {
     this.myWheel = new Winwheel({
      'numSegments'    : 4,
      'segments'       :
      [
          {'fillStyle' : '#eae56f', 'text' : 'Prize One'},
          {'fillStyle' : '#89f26e', 'text' : 'Prize Two'},
          {'fillStyle' : '#7de6ef', 'text' : 'Prize Three'},
          {'fillStyle' : '#e7706f', 'text' : 'Prize Four'}
      ],
      'animation' :
      {
          'type'     : 'spinToStop',
          'duration' : 10,
          'spins'    : 16,
        
      }
  });
      
   

    this.rutaActiva.queryParams.subscribe(params => {
       this.invitation = params['invitation'];
       this.validation = params['validation'];
    });

    this.taskService.getConfig().subscribe(config => 
      {
        console.log(config);
        this.config=config;
      } );



  
  }


  startSpin() {
    let audio = new Audio('./assets/a.m4a'); 
    audio.currentTime = 1;
    audio.play();
    // Ensure that spinning can't be clicked again while already running.
    if (this.wheelSpinning === false) {
      this.myWheel.startAnimation(true);
      this.wheelSpinning = true;
    }
  }

  resetWheel() {
    this.myWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
    this.myWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
    this.myWheel.draw();                // Call draw to render changes to the wheel.

    this.wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.
  }

 
   
  }





