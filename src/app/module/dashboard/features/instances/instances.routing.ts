import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstancesComponent } from './instances.component';
import { InstanceCreateComponent } from './pages/instance-create/instance-create.component';
import { InstanceDetailComponent } from './pages/instance-detail/instance-detail.component';

const routes: Routes = [
  {
    path: 'create',
    component: InstanceCreateComponent,
  },
  {
    path: ':instance_id',
    component: InstanceDetailComponent,
  },
  {
    path: '',
    component: InstancesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstancesRoutes {}
