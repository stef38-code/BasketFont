import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieDropDownComponent } from './categorie-drop-down.component';

describe('CategorieDropDownComponent', () => {
  let component: CategorieDropDownComponent;
  let fixture: ComponentFixture<CategorieDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieDropDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
