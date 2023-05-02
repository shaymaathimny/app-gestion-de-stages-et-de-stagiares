import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationRequest } from 'src/app/modules/authentication-request';



import { AuthenticationResponse } from 'src/app/modules/authentication-response';
import { RegisterRequest } from 'src/app/modules/register-request';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  
  constructor(private router : Router,private httpClient: HttpClient) { }
  private baseUrl=environment.baseurl+"/auth"
  isUserAuthenticated():boolean{
    if (localStorage.getItem ("accesstoken")){
      return true;
    }
    this.router.navigate(["/login"])
return false;
  }
  login(authenticationRequest : AuthenticationRequest):Observable<AuthenticationResponse>{
    const url=this.baseUrl+"/authenticate"
    return this.httpClient.post(url,authenticationRequest)
  }
  setUserToken (authenticationResponse: AuthenticationResponse){
    localStorage.setItem("accesstoken",JSON.stringify(authenticationResponse))

  }
  register(registerRequest: RegisterRequest):Observable<AuthenticationResponse>{
    const url=this.baseUrl+"/register"
    return this.httpClient.post(url,registerRequest)
  }
 
}
