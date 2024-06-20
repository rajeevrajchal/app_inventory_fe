import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'app/core/guards/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './features/home/home.component';
import { InstancesComponent } from './features/instances/instances.component';
import { InstanceCreateComponent } from './features/instances/pages/instance-create/instance-create.component';
import { InstanceDetailComponent } from './features/instances/pages/instance-detail/instance-detail.component';
import { MyAccountComponent } from './features/my-account/my-account.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        component: HomeComponent,
      },
      {
        path: 'instances',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: InstancesComponent,
          },
          {
            path: 'create',
            pathMatch: 'full',
            component: InstanceCreateComponent,
          },
          {
            path: ':instance_id',
            pathMatch: 'full',
            component: InstanceDetailComponent,
          },
        ],
      },
      {
        path: 'my-account',
        pathMatch: 'prefix',
        component: MyAccountComponent,
      },
    ],
  },
];

export const DashboardRoutes = RouterModule.forChild(routes);
