import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonneEditComponent } from './personne-edit.component';

const routes: Routes = [
  { path: '', component: PersonneEditComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonneEditRoutingModule { }
