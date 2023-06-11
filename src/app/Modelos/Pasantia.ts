import { Empresa } from './Empresa';

export class Pasantia {
  id: number = 0;
  titulo: string = '';
  requerimiento: string = '';
  conocimiento: string = '';
  ciudad: string = '';
  carrera: string = '';
  tiempo: string = '';
  beneficios: string = '';
  fecha_limite: string = '';
  duracion: string = '';
  tipo: string = '';
  empresa: Empresa = new Empresa();
}
