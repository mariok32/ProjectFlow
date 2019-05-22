import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../services/task.service';
import { config } from 'rxjs';
import { FormControl, FormGroup, Form, Validators, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { stringify } from 'querystring';


@Component({
  selector: 'app-point-form',
  templateUrl: './point-form.component.html',
  styleUrls: ['./point-form.component.scss']
})
export class PointFormComponent implements OnInit {

  @Input() token : string ;
  

  cconfiguracion:String;

  constructor(private taskService: TaskService,  private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    //this.form = this.formBuilder.group({
     // firstName: ['', Validators.required],
     // lastName: ['', Validators.required],
     // about: []
    //}
    //);
  }

  enviarFormulario(){
    this.taskService.putConfig(0,Number(this.cconfiguracion),this.token).subscribe();
  }

}

