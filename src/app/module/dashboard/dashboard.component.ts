import { Component, HostListener } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  constructor(private readonly dashboardService: DashboardService) {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    const sidebarStatusOnStorage = localStorage.getItem('sidebar');
    if (window.innerWidth < 768) {
      this.dashboardService.setSidebarState(false);
    } else if (sidebarStatusOnStorage) {
      this.dashboardService.setSidebarState(
        sidebarStatusOnStorage === 'true' ? true : false
      );
    }
  }
}
