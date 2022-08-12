import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService, user } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {
    email: null,
    password: null
  }
  constructor(private _auth: AuthServiceService,private _router:Router) { }

  ngOnInit(): void {
  }
  loginUser() {
    this._auth.loginUser(this.loginUserData).subscribe(
      res=> {
        localStorage.setItem('token',res.token)
        this._router.navigate(['/special'])
        console.log(res)
      })
  }
}
