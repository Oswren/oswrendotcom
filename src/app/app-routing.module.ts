import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpBirdsComponent } from './components/http-birds/http-birds.component';
import { MtgSetsComponent } from './components/mtg-sets/mtg-sets.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/http-birds',
    pathMatch: 'full'
  },
  {
    path: 'http-birds',
    component: HttpBirdsComponent
  },
  {
    path: 'mtg-sets',
    component: MtgSetsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
