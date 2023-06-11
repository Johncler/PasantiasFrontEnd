import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistroEstudianteService {
  private API_SERVER = 'http://localhost:8080/api/v1/estudiantes';
  constructor(private httpClient: HttpClient) {}

  public saveEstudiante(estudiante: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER, estudiante);
  }
}
