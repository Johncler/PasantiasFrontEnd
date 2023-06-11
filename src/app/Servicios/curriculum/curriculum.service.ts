import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiante } from 'src/app/Modelos/Estudiante';

@Injectable({
  providedIn: 'root',
})
export class CurriculumService {
  private API_SERVER = 'http://localhost:8080/api/v1/curriculum';
  constructor(private httpClient: HttpClient) {}

  public getCurriculum(id: number) {
    return this.httpClient.get<Estudiante>(this.API_SERVER + '/' + id);
  }

  public saveCurriculum(form_data: FormData) {
    return this.httpClient.post(this.API_SERVER, form_data, {
      responseType: 'text',
    });
  }

  public updateCurriculum(form_data: FormData) {
    return this.httpClient.put(this.API_SERVER, form_data, {
      responseType: 'text',
    });
  }
}
