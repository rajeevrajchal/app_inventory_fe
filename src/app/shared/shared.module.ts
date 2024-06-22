import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';

const components = [
  NotFoundComponent,
  TabsComponent,
  TableComponent,
  BreadcrumbComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule],
  exports: [...components],
})
export class SharedModule {}
