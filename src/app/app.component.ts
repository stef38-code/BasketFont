import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Categorie} from './share/dto';
import {CategoriesService} from './core/service';
import {Store} from '@ngrx/store';
import {CategoriesStoreSelectors, CategoriesStoreState} from './share/store/categorie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myFeatureCategorie$: Observable<Categorie[]>;
  title = 'BasketFont';

  constructor(private customerService: CategoriesService,
              private store$: Store<CategoriesStoreState.State>) {
  }

  ngOnInit(): void {
    this.myFeatureCategorie$ = this.store$.select(
      CategoriesStoreSelectors.selectAll
    );

  }
}
