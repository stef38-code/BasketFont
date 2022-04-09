import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchListeComponent } from './match-liste.component';

describe('MatchListeComponent', () => {
  let component: MatchListeComponent;
  let fixture: ComponentFixture<MatchListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
