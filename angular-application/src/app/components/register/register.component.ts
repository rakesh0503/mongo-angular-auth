import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService, user } from 'src/app/service/auth-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData : user = {
    email: null,
    password: null
  }
  constructor(private _auth: AuthServiceService,private _router:Router) { }

  ngOnInit(): void {
  }
  registerUser() {
    console.log(this.registerUserData);
    this._auth.registerUser(this.registerUserData).subscribe(
      res=> {
        localStorage.setItem('token',res.token);
        this._router.navigate(['/special'])
        console.log(res)
      }
    )
  }
}
