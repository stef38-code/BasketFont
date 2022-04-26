import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonneListComponent } from './personne-list.component';

const routes: Routes = [
  { path: '', component: PersonneListComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonneListRoutingModule { }
