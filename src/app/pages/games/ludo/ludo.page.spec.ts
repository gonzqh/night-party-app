import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LudoPage } from './ludo.page';

describe('LudoPage', () => {
  let component: LudoPage;
  let fixture: ComponentFixture<LudoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LudoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
