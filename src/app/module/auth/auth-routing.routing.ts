import { RouterModule, Routes } from '@angular/router';
import { localGuard } from 'app/core/guards/local.guard';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivate: [localGuard],
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];

export const AuthRoutingRoutes = RouterModule.forChild(routes);
