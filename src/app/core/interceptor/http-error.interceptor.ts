import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { AUTH_USER } from 'app/model/auth.model';
import { AuthService } from 'app/module/auth/auth.service';
import { catchError, throwError } from 'rxjs';

export const httpErrorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const authService = inject(AuthService);
  const user = authService.loginUser as AUTH_USER;
  const isLoggedIn = user !== null && user;

  return next(req).pipe(
    catchError((err) => {
      if ([401, 403].includes(err.status) && isLoggedIn) {
        authService.logout();
      }
      const error = err.error?.message || err.statusText;
      return throwError(() => error);
    })
  );
};
