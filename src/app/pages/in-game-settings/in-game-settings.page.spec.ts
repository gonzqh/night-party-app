import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InGameSettingsPage } from './in-game-settings.page';

describe('InGameSettingsPage', () => {
  let component: InGameSettingsPage;
  let fixture: ComponentFixture<InGameSettingsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InGameSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
