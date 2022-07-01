import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL='http://localhost:8099'

  constructor(private http: HttpClient, private router:Router ) { }

  signUpUser(user:any):any {
    let json = JSON.stringify(user);
    let Headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.URL + '/api/public/usuario/login', json,{headers:Headers});
  }

  registerUser(user:any):any {
    let json = JSON.stringify(user);
    let Headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.URL + '/api/public/usuario/crear', json,{headers:Headers});
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('nombre');
    localStorage.removeItem('codrol');
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
