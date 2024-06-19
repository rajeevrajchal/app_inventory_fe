import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingRoutes } from './auth-routing.routing';
import { AuthComponent } from './auth.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SocialLoginComponent } from './components/social-login/social-login.component';
import { LoginComponent } from './features/login/login.component';

const components = [
  AuthComponent,
  SocialLoginComponent,
  LoginFormComponent,
  LoginComponent,
];
@NgModule({
  declarations: [...components],
  imports: [CommonModule, AuthRoutingRoutes],
  exports: [...components],
})
export class AuthModule {}
