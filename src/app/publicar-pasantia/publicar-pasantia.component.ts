import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroPasantiaService } from '../Servicios/registro-pasantia/registro-pasantia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-publicar-pasantia',
  templateUrl: './publicar-pasantia.component.html',
  styleUrls: ['./publicar-pasantia.component.css'],
})
export class PublicarPasantiaComponent {
  pasantiaForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public registroPasantiaService: RegistroPasantiaService,
    private router: Router
  ) {
    this.pasantiaForm = this.fb.group({
      titulo: ['', Validators.required],
      requerimiento: ['', Validators.required],
      conocimiento: [''],
      ciudad: ['', Validators.required],
      carrera: ['', Validators.required],
      tiempo: ['', Validators.required],
      beneficios: ['', Validators.required],
      fecha_limite: ['', Validators.required],
      duracion: ['', Validators.required],
      tipo: [''],
    });
  }

  ngOnInit(): void {
    this.pasantiaForm = this.fb.group({
      titulo: ['', Validators.required],
      requerimiento: ['', Validators.required],
      conocimiento: [''],
      ciudad: ['', Validators.required],
      carrera: ['', Validators.required],
      tiempo: ['', Validators.required],
      beneficios: ['', Validators.required],
      fecha_limite: ['', Validators.required],
      duracion: ['', Validators.required],
      tipo: [''],
    });
  }

  public registrar() {
    if (this.pasantiaForm.valid) {
      const storedUsuario = localStorage.getItem('usuario');
      let user_id = 0;
      if (storedUsuario) {
        user_id = JSON.parse(storedUsuario).id;
      }
      this.registroPasantiaService
        .savePasantia(this.pasantiaForm.value, user_id)
        .subscribe(
          (response) => {
            Swal.fire({
              icon: 'success',
              title: '¡Correcto!',
              text: 'Registor éxitoso',
              confirmButtonColor: '#4CAF50',
              confirmButtonText: 'Aceptar',
            });
            this.router.navigate(['/']);
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Atención',
        text: 'Completa los campos',
        confirmButtonColor: '#4CAF50',
        confirmButtonText: 'Aceptar',
      });
      this.markAllFieldsAsTouched(this.pasantiaForm);
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
