import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { localGuard } from 'app/core/guards/local.guard';
import { NotFoundComponent } from 'app/shared/not-found/not-found.component';
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
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingRoutes {}
