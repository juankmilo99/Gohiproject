import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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
          console.log(res);
          localStorage.setItem('codrol', res.codrol);
          localStorage.setItem('nombre',res.nombre);
          if (localStorage.getItem('codrol') == "1") {
            localStorage.setItem('token', res.token);
            this.router.navigate(['/dash']);
          } else{
            localStorage.setItem('token', res.token);
            this.router.navigate(['/dashUser']);
          }



        },
        err => console.log(err)
      )
  }


}
