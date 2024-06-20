import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'auth-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  isLoading: boolean = false;
  constructor(
    private readonly authService: AuthService,
    private readonly formBuilder: FormBuilder
  ) {}

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  login() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.authService
        .emailLogin(this.loginForm.value as any)
        .subscribe((data) => {
          this.isLoading = false;
          console.log('data', data);
        });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
