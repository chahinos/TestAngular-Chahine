import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtelierListComponent } from './components/Atelier-list-chahine/Atelier-list-chahine.component';
import { AtelierFormComponent } from './components/Atelier-form-chahine/Atelier-form-chahine.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: AtelierListComponent },
  { path: 'add', component: AtelierFormComponent },
  { path: 'edit/:id', component: AtelierFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }