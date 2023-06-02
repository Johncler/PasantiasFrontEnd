import { Component } from '@angular/core';

@Component({
  selector: 'app-publicar-pasantia',
  templateUrl: './publicar-pasantia.component.html',
  styleUrls: ['./publicar-pasantia.component.css']
})
export class PublicarPasantiaComponent {
  tituloPasantia: string = '';
  requerimientosPasantia: string ='';
  conocimientos: string ='';
  ciudad: string = ''; 
  carrera: string ='';
  tiempoPasantia: string ='';
  beneficios: string = '';
  fecha: string = '';
  duracionPasantia: string = '';
  agregar() {
    // Lógica para agregar la pasantía
    // Puedes agregar tu propia lógica aquí
  }

}
