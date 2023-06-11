import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pasantia } from 'src/app/Modelos/Pasantia';

@Injectable({
  providedIn: 'root',
})
export class RegistroPasantiaService {
  private API_SERVER = 'http://localhost:8080/api/v1/pasantias';
  constructor(private httpClient: HttpClient) {}

  public getPasantias() {
    return this.httpClient.get<Pasantia[]>(this.API_SERVER);
  }

  public savePasantia(estudiante: any, user_id: number): Observable<any> {
    let params = new HttpParams();
    params = params.set('user_id', user_id);
    return this.httpClient.post(this.API_SERVER, estudiante, {
      params,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
