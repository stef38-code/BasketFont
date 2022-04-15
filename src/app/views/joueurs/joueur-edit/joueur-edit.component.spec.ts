import {ComponentFixture, TestBed} from '@angular/core/testing';

import {JoueurEditComponent} from './joueur-edit.component';

describe('JoueurEditComponent', () => {
  let component: JoueurEditComponent;
  let fixture: ComponentFixture<JoueurEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JoueurEditComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoueurEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
