import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl = "http://localhost:3001/api/users";

  constructor(private http: HttpClient) { }

  Register(user:User): Observable<User> {
    return this.http.post<User>(this.baseurl+'/register',user);
  }
  
  Login(user:any): Observable<User> {
    return this.http.post<any>(this.baseurl+'/login',user);
  }
}
