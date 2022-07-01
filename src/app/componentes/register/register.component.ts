import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {
    nombreusuario:'',
    correo: '',
    clave: '',
    codrol: 2
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  register(): any {
    this.authService.registerUser(this.user)
      .subscribe(
        res => {
          console.log(res);
           localStorage.setItem('nombre',res.nombre);
           localStorage.setItem('token', res.token);
           this.router.navigate(['/dashUser']);

        },
        err => console.log(err)
      )
  }

}
