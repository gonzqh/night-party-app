import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameSelectionPage } from './game-selection.page';

describe('GameSelectionPage', () => {
  let component: GameSelectionPage;
  let fixture: ComponentFixture<GameSelectionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
