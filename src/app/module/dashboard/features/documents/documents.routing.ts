import { RouterModule, Routes } from '@angular/router';
import { DocumentsComponent } from './documents.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentsComponent,
  },
];

export const DocumentsRoutes = RouterModule.forChild(routes);
