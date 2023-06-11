import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Curriculum } from '../Modelos/Curriculum';
import { Estudiante } from '../Modelos/Estudiante';
import { ExperienciaAcademica } from '../Modelos/ExperienciaAcademica';
import { ExperienciaProfesional } from '../Modelos/ExperienciaProfesional';
import { Idioma } from '../Modelos/Idioma';
import { CurriculumService } from '../Servicios/curriculum/curriculum.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css'],
})
export class CurriculumComponent {
  oCurriculum: Curriculum = new Curriculum();
  oExperienciaProfesionals: ExperienciaProfesional[] = [];
  oExperienciaAcademicas: ExperienciaAcademica[] = [];
  oIdiomas: Idioma[] = [];
  constructor(
    private router: Router,
    public curriculumService: CurriculumService
  ) {}

  ngOnInit() {}

  public registrar() {
    if (this.validaInformacion()) {
      const formData = new FormData();
      const storedUsuario = localStorage.getItem('usuario');
      if (storedUsuario) {
        formData.append('user_id', JSON.parse(storedUsuario).id);
      }
      if (this.oCurriculum.file !== null) {
        formData.append('archivo', this.oCurriculum.file);
      }

      this.oExperienciaProfesionals.forEach((item, index) => {
        formData.append('experiencia_profesional', item.formacion);
      });

      this.oExperienciaAcademicas.forEach((item, index) => {
        formData.append('experiencia_academica', item.formacion);
      });

      this.oIdiomas.forEach((item, index) => {
        formData.append('idioma', item.idioma);
      });

      this.curriculumService.saveCurriculum(formData).subscribe(
        (response) => {
          const storedUsuario = localStorage.getItem('usuario');
          if (storedUsuario) {
            this.router.navigate([
              '/curriculum/' + JSON.parse(storedUsuario).id,
            ]);
          } else {
            this.router.navigate(['/']);
          }

          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: 'Debes completar todos los campos',
        confirmButtonColor: '#f27474',
        confirmButtonText: 'Aceptar',
      });
    }
  }
  public agregarProfesional() {
    this.oExperienciaProfesionals.push({
      id: 0,
      formacion: '',
    });
  }
  public eliminarProfesional(index: number) {
    this.oExperienciaProfesionals.splice(index, 1);
  }
  public agregarAcademica() {
    this.oExperienciaAcademicas.push({
      id: 0,
      formacion: '',
    });
  }
  public eliminarAcademica(index: number) {
    this.oExperienciaAcademicas.splice(index, 1);
  }
  public agregarIdioma() {
    this.oIdiomas.push({
      id: 0,
      idioma: '',
    });
  }
  public eliminarIdioma(index: number) {
    this.oIdiomas.splice(index, 1);
  }
  public onFileSelected(event: any) {
    this.oCurriculum.file = event.target.files[0];
  }

  public validaInformacion() {
    const storedUsuario = localStorage.getItem('usuario');
    if (!storedUsuario) {
      return false;
    }
    if (!this.oCurriculum.file) {
      return false;
    }

    if (this.oExperienciaProfesionals.length <= 0) {
      return false;
    }

    if (this.oExperienciaAcademicas.length <= 0) {
      return false;
    }

    if (this.oIdiomas.length <= 0) {
      return false;
    }
    return true;
  }
}
