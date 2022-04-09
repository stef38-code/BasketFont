import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatchListeComponent} from './match-liste/match-liste.component';


const routes: Routes = [
  {path: '', component: MatchListeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchsRoutingModule {
}
