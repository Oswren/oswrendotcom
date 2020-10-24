import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpBirdsComponent } from './components/http-birds/http-birds.component';

const routes: Routes = [
  {
    path: 'http-birds',
    component: HttpBirdsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
