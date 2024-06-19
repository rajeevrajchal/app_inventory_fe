import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingRoutes } from './auth-routing.routing';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, AuthRoutingRoutes],
})
export class AuthModule {}
