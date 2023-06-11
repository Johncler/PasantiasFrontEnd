import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curriculum } from '../Modelos/Curriculum';
import { Estudiante } from '../Modelos/Estudiante';
import { ExperienciaAcademica } from '../Modelos/ExperienciaAcademica';
import { ExperienciaProfesional } from '../Modelos/ExperienciaProfesional';
import { Idioma } from '../Modelos/Idioma';
import { CurriculumService } from '../Servicios/curriculum/curriculum.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-curriculum-edit',
  templateUrl: './curriculum-edit.component.html',
  styleUrls: ['./curriculum-edit.component.css']
})
export class CurriculumEditComponent {
  id: number = 0;
  oCurriculum: Curriculum = new Curriculum();
  oExperienciaProfesionals: ExperienciaProfesional[] = [];
  oExperienciaAcademicas: ExperienciaAcademica[] = [];
  oIdiomas: Idioma[] = [];
  eliminados_academicos: [] = [];
  eliminados_profesionales: [] = [];
  eliminados_idiomas: [] = [];
  constructor(
    private router: Router,
    public curriculumService: CurriculumService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      // Realiza las operaciones necesarias con el valor del parámetro
      this.getCurriculum();
    });
  }
  public getCurriculum() {
    this.curriculumService.getCurriculum(this.id).subscribe((data) => {
      this.oCurriculum = data.curriculum;
      console.log(data.experienciaAcademicas);
      this.oExperienciaAcademicas = data.experienciaAcademicas;
      console.log(this.oExperienciaAcademicas);
      this.oExperienciaProfesionals = data.experienciaProfesionals;
      this.oIdiomas = data.idiomas;
      console.log(data);
    });
  }

  public registrar() {
    const formData = new FormData();
    const storedUsuario = localStorage.getItem('usuario');
    if (storedUsuario) {
      formData.append('user_id', JSON.parse(storedUsuario).id);
    }
    if (this.oCurriculum.file !== null) {
      formData.append('curriculum_id', '' + this.oCurriculum.id);
      formData.append('archivo', this.oCurriculum.file);
    }

    this.oExperienciaProfesionals.forEach((item, index) => {
      if (item.id != 0) {
        formData.append('experiencia_profesional_id', '' + item.id);
        formData.append('experiencia_profesional_txt', item.formacion);
      } else {
        formData.append('experiencia_profesional', item.formacion);
      }
    });

    this.oExperienciaAcademicas.forEach((item, index) => {
      if (item.id != 0) {
        formData.append('experiencia_academica_id', '' + item.id);
        formData.append('experiencia_academica_txt', item.formacion);
      } else {
        formData.append('experiencia_academica', item.formacion);
      }
    });

    this.oIdiomas.forEach((item, index) => {
      if (item.id != 0) {
        formData.append('idioma_id', '' + item.id);
        formData.append('idioma_txt', item.idioma);
      } else {
        formData.append('idioma', item.idioma);
      }
    });

    this.curriculumService.updateCurriculum(formData).subscribe(
      (response) => {
        const storedUsuario = localStorage.getItem('usuario');
        if (storedUsuario) {
          this.getCurriculum();
          Swal.fire({
            icon: 'success',
            title: '¡Correcto!',
            text: 'Curriculum actualizado',
            confirmButtonColor: '#4CAF50',
            confirmButtonText: 'Aceptar',
          });
        } else {
          this.router.navigate(['/']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  public agregarProfesional() {
    this.oExperienciaProfesionals.push({
      id: 0,
      formacion: '',
    });
  }
  public eliminarProfesional(index: number, id: number = 0) {
    this.oExperienciaProfesionals.splice(index, 1);
  }
  public agregarAcademica() {
    this.oExperienciaAcademicas.push({
      id: 0,
      formacion: '',
    });
  }
  public eliminarAcademica(index: number, id: number = 0) {
    this.oExperienciaAcademicas.splice(index, 1);
  }
  public agregarIdioma() {
    this.oIdiomas.push({
      id: 0,
      idioma: '',
    });
  }
  public eliminarIdioma(index: number, id: number = 0) {
    this.oIdiomas.splice(index, 1);
  }
  public onFileSelected(event: any) {
    this.oCurriculum.file = event.target.files[0];
  }
}
