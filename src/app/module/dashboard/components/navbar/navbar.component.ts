import { Component } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'dashboard-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isSidebarOpen: boolean = false;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.sidebarOpen$.subscribe((isOpen) => {
      this.isSidebarOpen = isOpen;
    });
  }

  toggleSidebar() {
    this.dashboardService.toggleSidebar();
  }
}
