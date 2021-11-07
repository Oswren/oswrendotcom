import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpBirdsComponent } from './components/http-birds/http-birds.component';
import { MtgBoostersComponent } from './components/mtg-boosters/mtg-boosters.component';
import { MtgSetsComponent } from './components/mtg-sets/mtg-sets.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/mtg-sets',
    pathMatch: 'full'
  },
  {
    path: 'http-birds',
    component: HttpBirdsComponent
  },
  {
    path: 'mtg-boosters',
    component: MtgBoostersComponent
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
