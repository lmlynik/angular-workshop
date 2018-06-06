import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatDetailComponent } from './cat-detail/cat-detail.component';
import { CatFormComponent } from './cat-form/cat-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'cats/:id', component: CatDetailComponent },
  { path: 'add', component: CatFormComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
