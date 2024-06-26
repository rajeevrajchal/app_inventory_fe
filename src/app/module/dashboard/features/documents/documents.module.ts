import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DocumentsComponent } from './documents.component';
import { DocumentsRoutes } from './documents.routing';

@NgModule({
  imports: [CommonModule, DocumentsRoutes],
  declarations: [DocumentsComponent],
})
export class DocumentsModule {}
