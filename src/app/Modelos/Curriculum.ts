import { Estudiante } from './Estudiante';

export class Curriculum {
  id: number;
  archivo: String;
  file: File | null = null;
  constructor() {
    this.id = 0;
    this.archivo = '';
  }
}
