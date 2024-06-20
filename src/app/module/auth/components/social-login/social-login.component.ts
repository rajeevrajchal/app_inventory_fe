import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'auth-social-login',
  templateUrl: './social-login.component.html',
})
export class SocialLoginComponent {
  isLoading: boolean = false;
  constructor(private readonly authService: AuthService) {}

  googleLogin() {
    this.isLoading = true;
    this.authService.googleLogin().subscribe((data) => {
      console.log('data', data.redirect_url);
      window.location.replace(data.redirect_url);
      this.isLoading = false;
    });
  }
}
