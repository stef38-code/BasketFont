import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JoueurListeComponent} from './joueur-liste/joueur-liste.component';


const routes: Routes = [
  {path: '', component: JoueurListeComponent, children: [
  {
    path: '',
    loadChildren: () => import('./joueur-liste/joueur-liste.module')
      .then(m => m.JoueurListeModule)
  },
  {
    path: 'edit',
    loadChildren: () => import(`./joueur-edit/joueur-edit.module`)
      .then(m => m.JoueurEditModule)
  },
 /* {
    path: 'map',
    loadChildren: () => import(`./map/map.module`)
      .then(m => m.MapModule)
  },
  {
    path: '**',
    loadChildren: () => import('./joueur-liste/joueur-liste.module')
      .then(m => m.JoueurListeModule)
  },*/

]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoueursRoutingModule {
}
