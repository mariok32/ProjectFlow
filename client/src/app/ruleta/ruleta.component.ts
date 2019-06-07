import { Component, OnInit,  } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ActivatedRoute, Params, Router, Routes } from '@angular/router';
import {Config} from '../interfaces/config';
import * as Winwheel from 'Winwheel';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';


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
  duracion:number;
  private diamantes:string;
  private medallas:string;
  private oros:string;
  private manzanas:string;
  constructor(
    private taskService: TaskService,
    private rutaActiva: ActivatedRoute,
    private router: Router,
    

    
  ) {
  
  }

  ngOnInit() {

  


    this.height=window.innerHeight; 
    this.width=window.innerWidth;
   
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
    
  
    this.taskService.getConfig(this.token).subscribe(
      r=> {
       this.nsegmentos=r.nsegmentos;
        var paso;

    for (paso = 0; paso < this.nsegmentos; paso++) {
          if(paso%4==0){
            let newSegment= this.myWheel.addSegment();
            ;
            this.diamantes="💎".repeat(Math.floor(Math.random() * 3) + 1);
            newSegment.text=this.diamantes;
            newSegment.fillStyle='#e7706f';
            Math.floor(Math.random() * 3) + 1;
          }   
          if (paso%4==1)
          {
            let newSegment= this.myWheel.addSegment();
            newSegment.fillStyle='#7de6ef'
            this.manzanas="🍎".repeat(Math.floor(Math.random() * 3) + 1);
            newSegment.text=this.manzanas;
          }
          if (paso%4==2)
          {
            let newSegment= this.myWheel.addSegment();
            newSegment.fillStyle='#e7706f'
            this.oros="🥇".repeat(Math.floor(Math.random() * 3) + 1);
            newSegment.text=this.oros;
          }
          if (paso%4==3)
          {
            //🥈
            let newSegment= this.myWheel.addSegment();
            newSegment.fillStyle='#7de6ef'
            this.medallas="🥈".repeat(Math.floor(Math.random() * 3) + 1);
            newSegment.text=this.medallas;
          }
    
    
     
      this.myWheel.draw();
    };
      
  });
 

      
   
 
   

 

    


  
  }

 
   delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
    }
  startSpin() {
    
    // Ensure that spinning can't be clicked again while already running.
    if (this.wheelSpinning === false) {
      let audio = new Audio('./assets/a.m4a'); 
      audio.currentTime = 1;
      audio.duration;
      audio.play();
      this.myWheel.startAnimation(true);
      this.wheelSpinning = true;
    }
    (async () => { 
      // Do something before delay
   
      await this.delay(12000);
      this.alertPrize();
      await this.delay(2000);
     
      this.router.navigate(['resultado']);
  })();
    
  }

  resetWheel() {
    this.myWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
    this.myWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
    this.myWheel.draw();                // Call draw to render changes to the wheel.

    this.wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.
  }

 
   alertPrize()
  {
      let winningSegment = this.myWheel.getIndicatedSegment();
      
      if (winningSegment.text.substring(0,2)==("💎"))
      {
        localStorage.setItem("puntuacion",(333*((winningSegment.text.length)/2)).toString());
      }
      if (winningSegment.text.substring(0,2)==("🍎"))
      {
        localStorage.setItem("puntuacion",(83*((winningSegment.text.length)/2)).toString());
      }
      if (winningSegment.text.substring(0,2)==("🥇"))
      { 
        localStorage.setItem("puntuacion", (250*((winningSegment.text.length)/2)).toString());
      }
      if (winningSegment.text.substring(0,2)==("🥈"))
      { 
        localStorage.setItem("puntuacion",(166*((winningSegment.text.length)/2)).toString());
      }
      
     
  }

  }





