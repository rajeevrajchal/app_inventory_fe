import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'app/core/service/config.service';
import { ToastService } from 'app/core/service/toast.service';
import { AUTH_USER } from 'app/model/auth.model';
import { Observable, catchError, of, tap } from 'rxjs';
import { EMAIL_LOGIN } from './types/email_login.type';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginUser: AUTH_USER | null = null;
  constructor(
    private router: Router,
    private readonly http: HttpClient,
    private readonly config: ConfigService,
    private readonly toastService: ToastService
  ) {}

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (user && token) {
      this.loginUser = JSON.parse(user || '') as AUTH_USER;
      return true;
    }
    return false;
  }

  checkAuth(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: token ? `Bearer ${token}` : '',
    });

    return this.http
      .get<any>(`${this.config.getBaseUrl()}who-i-am`, { headers })
      .pipe(
        tap((data: any) => {
          this.loginUser = data.user;
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(data.user));
          this.router.navigateByUrl('/');
        }),
        catchError((error) => {
          console.error('Error during authentication', error);
          this.toastService.showError(error || 'Error during authentication');
          return of(null);
        })
      );
  }

  googleLogin(): Observable<any> {
    return this.http.post<Observable<any>>(
      `${this.config.getBaseUrl()}google/login`,
      {}
    );
  }

  emailLogin(payload: EMAIL_LOGIN): Observable<any> {
    return this.http.post(`${this.config.getBaseUrl()}login`, payload).pipe(
      tap((data: any) => {
        this.loginUser = data.user;
        console.log('the data', data);
        localStorage.setItem('user', JSON.stringify(data.user));
        this.router.navigateByUrl('/');
      }),
      catchError((error) => {
        console.error('Error during authentication', error);
        this.toastService.showError(error || 'Error during authentication');
        return of(null);
      })
    );
  }

  logout(): Observable<any> {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.loginUser = null;
    this.router.navigateByUrl('/login');
    return of(true);
  }
}
