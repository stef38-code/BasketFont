import {Component, Input, OnInit} from '@angular/core';
import {Categorie} from '../../../dto';
import {Store} from '@ngrx/store';
import {CategoriesStoreSelectors, CategoriesStoreState} from '../../../store/categorie';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-categorie-drop-down',
  templateUrl: './categorie-drop-down.component.html',
  styleUrls: ['./categorie-drop-down.component.css']
})
export class CategorieDropDownComponent implements OnInit {
  @Input() inputFormGroup: FormGroup;
  categories: Categorie[];
  categorieSelectedId = 0;
  myFeatureItems$: Observable<Categorie[]>;

  constructor(private store$: Store<CategoriesStoreState.State>,) {
  }

  ngOnInit(): void {
    this.myFeatureItems$ = this.store$.select(
      CategoriesStoreSelectors.selectAll
    );
    this.myFeatureItems$.subscribe(values => {
      this.categories = values;
    });
  }

}
