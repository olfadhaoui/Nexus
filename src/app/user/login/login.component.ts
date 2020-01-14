import { Component, OnInit } from '@angular/core';

import {UserService} from '../../shared/user.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../../shared/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user : User;
  isLoginError : boolean = false;
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
  }



  OnSubmit(email:string,password:string) {
    this.userService.userAuthentication(email, password).subscribe((data : any)=>{

        localStorage.setItem('userToken',data.token);

        this.router.navigate(['/home'])

      },

      (err : HttpErrorResponse)=>{

        this.isLoginError = true;


      });
  }
}
