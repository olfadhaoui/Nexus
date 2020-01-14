import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import {HttpClient, HttpHeaders} from '@angular/common/http';

import { map } from 'rxjs/operators';

import { User } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 readonly rootUrl = 'https://pacific-caverns-84912.herokuapp.com/api/login';
  constructor(private http:HttpClient) { }
user:User;
  userAuthentication(email:string,password:string){
    //var data = "email=" + email + "&password=" + password  ;

    //var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json','No-Auth':'True'});

    return this.http.post(this.rootUrl , {email, password}, { headers:{ 'Content-Type': 'application/json'}});



  }
  getUserClaims(){

    return  this.http.get('https://pacific-caverns-84912.herokuapp.com/api/profile',{headers:{
        'Authorization':'Bearer '+localStorage.getItem('userToken'), 'Content-Type': 'application/json'}});

  }
}
