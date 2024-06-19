import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from 'app/module/auth/auth.service';

export const authTokenInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const authService = inject(AuthService);
  const user = authService.loginUser;
  const isLoggedIn = user !== null && user?.token;
  if (isLoggedIn) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${user.token}` },
    });
  }
  return next(req);
};
