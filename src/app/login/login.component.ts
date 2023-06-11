import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../Servicios/login/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo: string = '';
  password: string = '';
  loginForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      correo: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      correo: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public login() {
    this.loginService.login(this.loginForm.value).subscribe(
      (response) => {
        const usuario = response ?? ''; // Usando el operador de coalescencia nula (??)
        if(usuario){
          localStorage.setItem('usuario', JSON.stringify(usuario));
        }
        const storedUsuario = localStorage.getItem('usuario');
        if (storedUsuario) {
          this.router.navigate(['/']);
        } else {
          Swal.fire({
            icon: 'info',
            title: 'Atención',
            text: 'Usuario o contraseña incorrectos',
            confirmButtonColor: '#4CAF50',
            confirmButtonText: 'Aceptar',
          });
          localStorage.removeItem('usuario');
        }
      },
      (error) => {
        Swal.fire({
          icon: 'info',
          title: 'Atención',
          text: 'Credenciales invalidas',
          confirmButtonColor: '#4CAF50',
          confirmButtonText: 'Aceptar',
        });
        console.log(error);
      }
    );
  }

  recoverPassword() {
    // Lógica para recuperar la contraseña
    // Puedes agregar tu propia lógica aquí
  }
  register() {}
  registerWithGoogle() {}
  registerWithApple() {}
}
