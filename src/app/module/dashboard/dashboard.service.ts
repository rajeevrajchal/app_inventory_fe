import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private sidebarOpen = new BehaviorSubject<boolean>(true);

  sidebarOpen$ = this.sidebarOpen.asObservable();

  toggleSidebar() {
    localStorage.setItem('sidebar', String(!this.sidebarOpen.value));
    this.sidebarOpen.next(!this.sidebarOpen.value);
  }

  setSidebarState(state: boolean) {
    localStorage.setItem('sidebar', String(state));
    this.sidebarOpen.next(state);
  }
}
