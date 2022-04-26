import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JoueurEditComponent } from './joueur-edit.component';

const routes: Routes = [
  { path: '', component: JoueurEditComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoueurEditRouting { }
