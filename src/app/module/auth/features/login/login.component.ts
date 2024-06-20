import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  isPageLoading: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginWithToken();
  }

  loginWithToken() {
    this.isPageLoading = true;
    this.route.queryParams.subscribe((params) => {
      const token = params['token'];
      if (token) {
        this.authService.checkAuth(token).subscribe((data) => {
          this.isPageLoading = false;
        });
      } else {
        this.isPageLoading = false;
        this.router.navigateByUrl('/login');
      }
    });
  }
}
