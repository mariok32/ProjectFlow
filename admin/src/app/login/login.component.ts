import {Component} from '@angular/core';
import {ApiService} from '../services/api-service.service';
import {CustomerService} from '../services/customer-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email:string;
  password:string;
 

  constructor(private api: ApiService, private customer: CustomerService, private router: Router) {
  }

  tryLogin() {
    this.api.login(
      this.email,
      this.password
    )
      .subscribe(
        r => {
        
          if (r.token) {
            localStorage.setItem('token',r.token);
         
            this.router.navigateByUrl('/admin');
         
          
          }
        },

        r => {
          alert('Login incorrecto');
        });
  }

}