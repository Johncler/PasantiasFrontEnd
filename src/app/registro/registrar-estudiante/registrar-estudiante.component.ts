import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroEstudianteService } from 'src/app/Servicios/registro-estudiante/registro-estudiante.service';

@Component({
  selector: 'app-registrar-estudiante',
  templateUrl: './registrar-estudiante.component.html',
  styleUrls: ['./registrar-estudiante.component.css']
})
export class RegistrarEstudianteComponent {
  estudianteForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public registroEstudianteService: RegistroEstudianteService,
    private router: Router
  ) {
    this.estudianteForm = this.fb.group({
      nombre: ['', Validators.required],
      primer_apellido: ['', Validators.required],
      segundo_apellido: [''],
      correo: ['', Validators.required],
      tipo_documento: ['', Validators.required],
      documento: ['', Validators.required],
      complemento: [''],
      vinculacion_ucb: ['', Validators.required],
      carrera: ['', Validators.required],
      anio: ['', Validators.required],
      semestre: ['', Validators.required],
      sede: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.estudianteForm = this.fb.group({
      nombre: ['', Validators.required],
      primer_apellido: ['', Validators.required],
      segundo_apellido: [''],
      correo: ['', Validators.required],
      tipo_documento: ['', Validators.required],
      documento: ['', Validators.required],
      complemento: [''],
      vinculacion_ucb: ['', Validators.required],
      carrera: ['', Validators.required],
      anio: ['', Validators.required],
      semestre: ['', Validators.required],
      sede: ['', Validators.required],
    });
  }

  public registrar() {
    this.registroEstudianteService
      .saveEstudiante(this.estudianteForm.value)
      .subscribe(
        (response) => {
          const usuario = response ?? ''; // Usando el operador de coalescencia nula (??)
          if (usuario) {
            localStorage.setItem('usuario', JSON.stringify(usuario));
          }
          const storedUsuario = localStorage.getItem('usuario');
          if (storedUsuario) {
            this.router.navigate(['/']);
          } else {
            localStorage.removeItem('usuario');
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
