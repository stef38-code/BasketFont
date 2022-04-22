import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PersonneCiviliteComponent} from './personne-civilite.component';

describe('PersonneCiviliteComponent', () => {
  let component: PersonneCiviliteComponent;
  let fixture: ComponentFixture<PersonneCiviliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonneCiviliteComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonneCiviliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
