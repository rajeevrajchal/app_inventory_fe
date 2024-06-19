import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'app/core/guards/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './features/home/home.component';
import { InstancesComponent } from './features/instances/instances.component';
import { MyAccountComponent } from './features/my-account/my-account.component';
import { OnboardingComponent } from './features/onboarding/onboarding.component';

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
        path: 'onboard',
        component: OnboardingComponent,
      },
      {
        path: 'instances',
        pathMatch: 'prefix',
        component: InstancesComponent,
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
