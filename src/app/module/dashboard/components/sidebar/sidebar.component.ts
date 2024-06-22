import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'dashboard-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  isSidebarOpen: boolean = false;
  activeUrl: string = '';
  sidebars: any = [
    {
      href: '/',
      label: 'home',
      icon: `<i class="bi bi-house-door font-bold text-xl"></i>`,
    },
    {
      href: '/instances',
      label: 'instances',
      icon: `<i class="bi bi-bar-chart-fill font-bold text-xl"></i>`,
    },
    {
      href: '/documents',
      label: 'documents',
      icon: `<i class="bi bi-folder-fill font-bold text-xl"></i>`,
    },
    {
      href: '/work-logs',
      label: 'work logs',
      icon: `<i class="bi bi-bar-chart-steps font-bold text-xl"></i>`,
    },
    {
      href: '/vendors',
      label: 'vendors',
      icon: `<i class="bi bi-nintendo-switch font-bold text-xl"></i>`,
    },
  ];

  constructor(
    private dashboardService: DashboardService,
    private readonly router: Router
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.activeUrl = event.url;
      });
  }

  ngOnInit() {
    this.dashboardService.sidebarOpen$.subscribe((isOpen) => {
      this.isSidebarOpen = isOpen;
    });
  }

  isActive(url: string): boolean {
    if (this.activeUrl === url) {
      return true;
    }

    if (
      this.activeUrl.startsWith(url + '/') ||
      this.activeUrl.startsWith(url + '?') ||
      this.activeUrl === url + '/'
    ) {
      return true;
    }

    return false;
  }
}
