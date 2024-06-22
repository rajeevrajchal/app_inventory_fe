import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'app/shared/not-found/not-found.component';
import { InstancesComponent } from './instances.component';
import { InstanceCreateComponent } from './pages/instance-create/instance-create.component';
import { InstanceDetailComponent } from './pages/instance-detail/instance-detail.component';

const routes: Routes = [
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
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstancesRoutes {}
