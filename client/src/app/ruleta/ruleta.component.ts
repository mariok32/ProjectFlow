import { Component, OnInit,  } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ActivatedRoute, Params, Router, Routes } from '@angular/router';
import {Config} from '../interfaces/config';
import * as Winwheel from 'Winwheel';


@Component({
  selector: 'app-ruleta',
  templateUrl: './ruleta.component.html',
  styleUrls: ['./ruleta.component.scss']
})



export class RuletaComponent implements OnInit{
 
  invitation:string;
  validation:string;
  config: Config;
 


  private token: string;
  myWheel:Winwheel;
  private wheelSpinning = false;
  private nsegmentos:number;
  height:number;
  width:number;

  constructor(
    private taskService: TaskService,
    private rutaActiva: ActivatedRoute,
    private router: Router,
    

    
  ) {
  
  }

  ngOnInit() {

  


    this.height=window.innerHeight; 
    this.width=window.innerWidth;
    console.log(this.width);
    console.log(this.height);
    this.myWheel = new Winwheel({
      'canvasId'       : 'canvas',
      'numSegments'    : 0,
      'textFontSize'    : 50,
      'responsive'   : true,  // This wheel is responsive!
      'segments'       :
      
      [
          {'fillStyle' : '#eae56f', 'text' : 'Prize One'},
           
      ],
      'animation' :
      {
          'type'     : 'spinToStop',
          'duration' : 10,
          'spins'    : 16,
        
      },
      'pins' :
        {
            'outerRadius': 6,
            'responsive' : true, // This must be set to true if pin size is to be responsive.
        },
  });
    
  console.log(this.myWheel);
    this.taskService.getConfig(this.token).subscribe(
      r=> {
       this.nsegmentos=r.nsegmentos;
        var paso;
    for (paso = 0; paso < this.nsegmentos; paso++) {
          if(paso%2==0){
            let newSegment= this.myWheel.addSegment();
            newSegment.text=" 💎 💎 💎";
            newSegment.fillStyle='#e7706f';
          }   
          else{
            let newSegment= this.myWheel.addSegment();
            newSegment.fillStyle='#7de6ef'
            newSegment.text=" 🍎 🍎 ";}
          
     
    
     
      this.myWheel.draw();
    };
      console.log()});
 

      
   
    
   console.log(this.myWheel);`
   `

    this.rutaActiva.queryParams.subscribe(params => {
       this.invitation = params['invitation'];
       this.validation = params['validation'];
    });

    


  
  }


  startSpin() {
    let audio = new Audio('./assets/a.m4a'); 
    audio.currentTime = 1;
    audio.duration;
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





