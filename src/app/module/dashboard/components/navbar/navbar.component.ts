import { Component } from '@angular/core';
import { AuthService } from 'app/module/auth/auth.service';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'dashboard-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isSidebarOpen: boolean = false;
  isLogoutLoading: boolean = false;

  constructor(
    private dashboardService: DashboardService,
    private readonly authService: AuthService
  ) {}

  ngOnInit() {
    this.dashboardService.sidebarOpen$.subscribe((isOpen) => {
      this.isSidebarOpen = isOpen;
    });
  }

  toggleSidebar() {
    this.dashboardService.toggleSidebar();
  }

  logout() {
    this.isLogoutLoading = true;
    this.authService.logout().subscribe((data) => {
      this.isLogoutLoading = false;
    });
  }
}
