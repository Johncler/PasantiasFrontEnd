import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroEmpresaService } from 'src/app/Servicios/registro-empresa/registro-empresa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-empresa',
  templateUrl: './registrar-empresa.component.html',
  styleUrls: ['./registrar-empresa.component.css']
})
export class RegistrarEmpresaComponent {
  empresaForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public registroEmpresaService: RegistroEmpresaService,
    private router: Router
  ) {
    this.empresaForm = this.fb.group({
      password: ['', Validators.required],
      password2: ['', Validators.required],
      correo: ['', Validators.required],
      nombre: ['', Validators.required],
      responsable: ['', Validators.required],
      web: [''],
      pais: [''],
      ciudad: ['', Validators.required],
      direccion: [''],
      telefono: ['', Validators.required],
      descripcion: ['', Validators.required],
      logo: [''],
      terms: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.empresaForm = this.fb.group({
      password: ['', Validators.required],
      password2: ['', Validators.required],
      correo: ['', Validators.required],
      nombre: ['', Validators.required],
      responsable: ['', Validators.required],
      web: [''],
      pais: [''],
      ciudad: ['', Validators.required],
      direccion: [''],
      telefono: ['', Validators.required],
      descripcion: ['', Validators.required],
      logo: [''],
      terms: ['', Validators.required],
    });
  }

  public registrar() {
    let pass1 = this.empresaForm.get('password')?.value;
    let pass2 = this.empresaForm.get('password2')?.value;
    if (this.empresaForm.valid) {
      if (pass1 == pass2) {
        this.registroEmpresaService
          .saveEmpresa(this.empresaForm.value, pass1)
          .subscribe(
            (response) => {
              const usuario = response ?? ''; // Usando el operador de coalescencia nula (??)
              if (usuario) {
                localStorage.setItem('usuario', JSON.stringify(usuario));
              }
              const storedUsuario = localStorage.getItem('usuario');
              if (storedUsuario) {
                Swal.fire({
                  icon: 'success',
                  title: '¡Correcto!',
                  text: 'Registor éxitoso',
                  confirmButtonColor: '#4CAF50',
                  confirmButtonText: 'Aceptar',
                });
                this.router.navigate(['/']);
              } else {
                localStorage.removeItem('usuario');
              }
            },
            (error) => {
              console.log(error);
            }
          );
      } else {
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: 'Las contraseñas no coinciden',
          confirmButtonColor: '#f27474',
          confirmButtonText: 'Aceptar',
        });
      }
    } else {
      this.markAllFieldsAsTouched(this.empresaForm);
    }
  }
  markAllFieldsAsTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.get(key);
      if (control instanceof FormGroup) {
        this.markAllFieldsAsTouched(control);
      } else {
        control?.markAsTouched();
      }
    });
  }

}
