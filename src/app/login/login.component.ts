import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string ='';
  password: string='';
  login() {
    // Lógica para realizar la autenticación con el usuario y contraseña ingresados
    // Puedes agregar tu propia lógica aquí
  }

  recoverPassword() {
    // Lógica para recuperar la contraseña
    // Puedes agregar tu propia lógica aquí
  }
  register() {
    
  }
  registerWithGoogle(){}
  registerWithApple(){}
}
