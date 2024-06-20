import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { AUTH_USER } from 'app/model/auth.model';
import { AuthService } from 'app/module/auth/auth.service';

export const authTokenInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const authService = inject(AuthService);
  const user = authService.loginUser as AUTH_USER;
  const token = localStorage.getItem('token');
  const isLoggedIn = user !== null && user;
  if (isLoggedIn && token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
  }
  return next(req);
};
