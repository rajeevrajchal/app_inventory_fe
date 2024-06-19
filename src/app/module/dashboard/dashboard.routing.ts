import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './features/home/home.component';
import { InstancesComponent } from './features/instances/instances.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [],
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        component: HomeComponent,
      },
      {
        path: 'instances',
        pathMatch: 'prefix',
        component: InstancesComponent,
      },
    ],
  },
];

export const DashboardRoutes = RouterModule.forChild(routes);
