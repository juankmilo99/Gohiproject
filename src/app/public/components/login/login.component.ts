import { Router } from '@angular/router';
import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    correo: '',
    clave: ''
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logIn(): any {
    this.authService.signUpUser(this.user)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          const tokenDecoded:any =  jwt_decode(JSON.stringify(localStorage.getItem('token')));
          if(tokenDecoded.user[0].codigo==1){
            this.router.navigate(['/dash']);

          }else{
            this.router.navigate(['/dashUser']);
          }

        },
        err => console.log(err)
      )
  }

}
