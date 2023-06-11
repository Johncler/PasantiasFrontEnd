import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private API_SERVER = 'http://localhost:8080/api/v1/login/authentication';
  constructor(private httpClient: HttpClient) {}

  public login(formLogin: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER, formLogin);
  }
}
