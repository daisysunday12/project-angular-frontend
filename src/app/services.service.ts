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

  // login
  login(username: any, password: any) {
    const url = environment.API_EndPoint + 'auth';
    return this.httpClient.post<any>(url, { username: username, password: password }).pipe(map((data) => data));
  }
}
