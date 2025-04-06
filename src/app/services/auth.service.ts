import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://localhost:7206/api/Auth/Login';
  constructor(private http: HttpClient) {}

  login(credentials: { uname: string; password: string }): Observable<any> {
    alert("AuthService Çalıştı");
    return this.http.post<any>(this.apiUrl, credentials);
  }
}
