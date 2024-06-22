import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'app/core/guards/auth.guard';
import { NotFoundComponent } from 'app/shared/not-found/not-found.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './features/home/home.component';
import { MyAccountComponent } from './features/my-account/my-account.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },
      {
        path: 'instances',
        loadChildren: () =>
          import('./features/instances/instance.module').then(
            (m) => m.InstanceModule
          ),
      },
      {
        path: 'my-account',
        pathMatch: 'full',
        component: MyAccountComponent,
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
export class DashboardRoutes {}
