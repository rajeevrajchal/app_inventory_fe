import { Component } from '@angular/core';
import { ToastService } from 'app/core/service/toast.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'auth-social-login',
  templateUrl: './social-login.component.html',
})
export class SocialLoginComponent {
  isLoading: boolean = false;
  constructor(
    private readonly authService: AuthService,
    private readonly toastService: ToastService
  ) {}

  googleLogin() {
    this.isLoading = true;
    this.authService.googleLogin().subscribe({
      next: (data) => {
        window.location.replace(data.redirect_url);
        this.isLoading = false;
      },
      error: (e) => {
        console.log('error', e);
        this.toastService.showError(e || 'Login Failed', 'Login');
      },
    });
  }
}
