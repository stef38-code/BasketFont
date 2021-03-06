import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {path: 'dashboard', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)},
  {path: 'personnes', loadChildren: () => import('./views/personne/personne.module').then(m => m.PersonneModule)},
  {path: 'equipes', loadChildren: () => import('./views/equipes/equipes.module').then(m => m.EquipesModule)},
  {path: 'joueurs', loadChildren: () => import('./views/joueurs/joueurs.module').then(m => m.JoueursModule)},
  {path: 'matchs', loadChildren: () => import('./views/matchs/matchs.module').then(m => m.MatchsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

