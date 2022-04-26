
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonneComponent } from './personne.component';

const routes: Routes = [
  {
    path: '', component: PersonneComponent, children: [
      {
        path: '',
        loadChildren: () => import(`./personne-list/personne-list.module`)
          .then(m => m.PersonneListModule)
      },
      {
        path: 'edit',
        loadChildren: () => import(`./personne-edit/personne-edit.module`)
          .then(m => m.PersonneEditModule)
      },
      {
        path: '**',
        loadChildren: () => import(`./personne-list/personne-list.module`)
          .then(m => m.PersonneListModule)
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonneRoutingModule { }
