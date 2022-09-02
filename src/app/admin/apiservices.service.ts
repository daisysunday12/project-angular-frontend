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
  httpOptions1: any

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

  getToken1() {
    var tokenKey = localStorage.getItem('appToken');
    if (tokenKey != null) {
      var tkn = JSON.parse(tokenKey);
      this.httpOptions1 = {
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
  }
  deletePekerjaan(params: any): Observable<any> {
    const url = environment.API_EndPoint + 'pekerjaan/del/' + params;
    this.getToken();
    return this.httpClient.delete<any>(url, this.httpOptions).pipe(map((data) => data));
  }
  createPekerjaan(data: any): Observable<any> {
    const url = environment.API_EndPoint + 'pekerjaan/add/';
    // this.getToken1();
    return this.httpClient.post<any>(url, data, this.httpOptions1).pipe(map((data) => data));
  }

  loadPekerjaanInfo(data: any): Observable<Pekerjaan> {
    const url = environment.API_EndPoint + 'pekerjaan/detail/' + data;
    return this.httpClient.get<Pekerjaan>(url).pipe(map((data) => data));
  }

  updatePekerjaanDetails(params: any, data: any): Observable<any> {
    const url = environment.API_EndPoint + 'pekerjaan/update/' + params;
    return this.httpClient.put<any>(url, data).pipe(map((data) => data));
  }
}
