import { NgModule } from '@angular/core';
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingRoutes {}
