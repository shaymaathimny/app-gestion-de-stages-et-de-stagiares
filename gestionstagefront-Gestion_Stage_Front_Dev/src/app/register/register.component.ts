import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterRequest } from '../modules/register-request';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerRequest: RegisterRequest = new RegisterRequest();
  errorMsg ! : string;
  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit(): void {

  }
  register(){
    this.authService.register(this.registerRequest)
    .subscribe(result=>{
      this.router.navigate(['/login'])
    console.log(result)
    
    },
    (err:HttpErrorResponse)=>this.errorMsg='this email is existe')
  }

}
