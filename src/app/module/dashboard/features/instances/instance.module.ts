import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { InstancesComponent } from './instances.component';
import { InstancesRoutes } from './instances.routing';
import { InstanceCreateComponent } from './pages/instance-create/instance-create.component';
import { InstanceDetailComponent } from './pages/instance-detail/instance-detail.component';

@NgModule({
  imports: [CommonModule, InstancesRoutes, SharedModule],
  declarations: [
    InstancesComponent,
    InstanceCreateComponent,
    InstanceDetailComponent,
  ],
})
export class InstanceModule {}
