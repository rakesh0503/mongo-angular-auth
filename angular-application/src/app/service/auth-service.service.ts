import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
export interface user{
  email:string | null,
  password:string |null
}
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private _registerUrl = 'http://localhost:3000/api/register';
  private _loginUrl = 'http://localhost:3000/api/login';

  constructor(private http:HttpClient,private _router:Router) { }

  registerUser(user:user){
    return this.http.post<any>(this._registerUrl,user);
  }

  loginUser(user:user){
    return this.http.post<any>(this._loginUrl,user);
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
  return localStorage.getItem('token');

  }
  logOut(){
    localStorage.removeItem('token');
   this._router.navigate(['/events'])

  }
}
