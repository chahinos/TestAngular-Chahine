import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtelierFormComponent } from './components/Atelier-form-chahine/Atelier-form-chahine.component';
import { AtelierListComponent } from './components/Atelier-list-chahine/Atelier-list-chahine.component';

@NgModule({
  declarations: [
    AppComponent,
    AtelierFormComponent,
    AtelierListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideHttpClient(withFetch())  // ✅ fix warning SSR
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }