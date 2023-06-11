import { Curriculum } from './Curriculum';
import { ExperienciaAcademica } from './ExperienciaAcademica';
import { ExperienciaProfesional } from './ExperienciaProfesional';
import { Idioma } from './Idioma';
import { Usuario } from './Usuario';

export class Estudiante {
  id: number = 0;
  nombre: String = '';
  primer_apellido: String = '';
  segundo_apellido: String = '';
  correo: String = '';
  tipo_documento: String = '';
  documento: String = '';
  complemento: String = '';
  vinculacion_ucb: String = '';
  carrera: String = '';
  anio: String = '';
  semestre: String = '';
  sede: String = '';
  usuario: Usuario = new Usuario();
  curriculum: Curriculum = new Curriculum();
  experienciaAcademicas: ExperienciaAcademica[] = [];
  experienciaProfesionals: ExperienciaProfesional[] = [];
  idiomas: Idioma[] = [];
}
