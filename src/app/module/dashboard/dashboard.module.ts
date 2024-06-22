import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { DashboardService } from './dashboard.service';

@NgModule({
  declarations: [DashboardComponent, NavbarComponent, SidebarComponent],
  imports: [CommonModule, DashboardRoutes, SharedModule],
  providers: [DashboardService],
})
export class DashboardModule {}
