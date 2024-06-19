import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AUTH_USER } from 'app/model/auth.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginUser: AUTH_USER | null = null;
  constructor(private router: Router) {}

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (user && token) {
      this.loginUser = JSON.parse(user || '') as AUTH_USER;
      return true;
    }
    return false;
  }

  logout(): Observable<any> {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.loginUser = null;
    this.router.navigateByUrl('/login');
    return of(true);
  }
}
