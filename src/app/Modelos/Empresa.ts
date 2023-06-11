import { Usuario } from './Usuario';

export class Empresa {
  id: number = 0;
  correo: string = '';
  nombre: string = '';
  responsable: string = '';
  web: string = '';
  pais: string = '';
  ciudad: string = '';
  direccion: string = '';
  telefono: string = '';
  descripcion: string = '';
  logo: string = '';
  usuario: Usuario = new Usuario();
}
