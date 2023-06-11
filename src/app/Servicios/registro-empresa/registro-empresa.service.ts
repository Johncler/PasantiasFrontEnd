import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistroEmpresaService {
  private API_SERVER = 'http://localhost:8080/api/v1/empresas';
  constructor(private httpClient: HttpClient) {}

  public saveEmpresa(empresa: any, password: any): Observable<any> {
    let params = new HttpParams();
    params = params.set('password', password);
    return this.httpClient.post(this.API_SERVER, empresa, { params });
  }
}
