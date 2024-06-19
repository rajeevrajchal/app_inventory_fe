import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authTokenInterceptor } from './core/interceptor/auth-token.interceptor';
import { httpErrorInterceptor } from './core/interceptor/http-error.interceptor';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  bootstrap: [AppComponent],
  providers: [
    provideHttpClient(
      withInterceptors([authTokenInterceptor, httpErrorInterceptor])
    ),
  ],
})
export class AppModule {}
