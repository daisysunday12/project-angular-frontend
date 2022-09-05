import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient: HttpClient) { }

  getPekerjaan() {
    const url = environment.API_EndPoint + 'pekerjaan';
    return this.httpClient.get(url).pipe(map(data => data));
  }

  getPekerjaanDetails(params: any) {
    const url = environment.API_EndPoint + 'pekerjaan/' + params;
    return this.httpClient.get(url).pipe(map(data => data));
  }

  getPekerjaanKandidat(params: any) {
    const url = environment.API_EndPoint + 'kandidat/details/' + params;
    return this.httpClient.get(url).pipe(map(data => data));
  }

  createKandidat(data: any): Observable<any> {
    const url = environment.API_EndPoint + 'kandidat/add';
    return this.httpClient.post<any>(url, data).pipe(map((data) => data));
  }

  uploadImageKandidat(param: any, data: any): Observable<any> {
    const url = environment.API_EndPoint + 'kandidat/add/' + param;
    return this.httpClient.put<any>(url, data).pipe(map((data) => data));
  }

  uploadFileKandidat(param: any, data: any): Observable<any> {
    const url = environment.API_EndPoint + 'kandidat/up/' + param;
    return this.httpClient.put<any>(url, data).pipe(map((data) => data));
  }

  // login
  login(username: any, password: any) {
    const url = environment.API_EndPoint + 'auth';
    return this.httpClient.post<any>(url, { username: username, password: password }).pipe(map((data) => data));
  }
}
