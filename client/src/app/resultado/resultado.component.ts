import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Routes } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Task } from '../interfaces/task';
@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {

  
  constructor( 
    private router: Router,
    private TaskService_:TaskService,
      ) { }
  centenas:string;
  decenas:string;
  unidades:string;
  cadena:string;
  ngOnInit() {
    if (!localStorage.getItem("puntuacion")){
      this.router.navigate(['inicio']);

    }
    else{
     this.cadena=(localStorage.getItem("puntuacion"));
     if (this.cadena.length==3){
      this.centenas=this.cadena.substring(0,1);
      this.decenas=this.cadena.substring(1,2);
      this.unidades=this.cadena.substring(2,3);
     }
     else{
      this.centenas="0";
      this.decenas=this.cadena.substring(1,2);
      this.unidades=this.cadena.substring(2,3);
     }
    
     alert(localStorage.getItem("validation"));
     this.TaskService_.postSendPoints(localStorage.getItem("validation"),localStorage.getItem("invitation"),parseInt(this.cadena)).subscribe();

     localStorage.removeItem("puntuacion");
     localStorage.removeItem("invitation");
     localStorage.removeItem("validation");
    }

  }
  

  }
