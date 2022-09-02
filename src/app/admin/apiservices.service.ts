import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pekerjaan } from './model/pekerjaan';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {
  httpOptions: any

  constructor(private httpClient: HttpClient) { }

  getToken() {
    var tokenKey = localStorage.getItem('appToken');
    if (tokenKey != null) {
      var tkn = JSON.parse(tokenKey);
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + tkn.token,
        })
      }
    }
  };

  getPekerjaan() {
    const url = environment.API_EndPoint + 'pekerjaan/pekerjaanbackend';
    this.getToken();
    return this.httpClient.get(url, this.httpOptions).pipe(map((data) => data));
  };
  deletePekerjaan(params: any): Observable<any> {
    const url = environment.API_EndPoint + 'pekerjaan/del/' + params;
    this.getToken();
    return this.httpClient.delete<any>(url, this.httpOptions).pipe(map((data) => data));
  }
}
