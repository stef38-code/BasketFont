import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JoueurListeComponent } from './joueur-liste.component';

const routes: Routes = [
  { path: '', component: JoueurListeComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoueurListeRouting { }
