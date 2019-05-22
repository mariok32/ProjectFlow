import { Component, OnInit } from '@angular/core';
import {LoginService, User} from '../services/login.service';
 
@Component({
  selector: 'app-login',
  providers: [LoginService],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
 
  constructor(
        private _service:LoginService){}
 
    ngOnInit(){
        this._service.checkCredentials();
    }
 
    logout() {
        this._service.logout();
    }
 
}
