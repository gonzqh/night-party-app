import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShotoretoPage } from './shotoreto.page';

describe('ShotoretoPage', () => {
  let component: ShotoretoPage;
  let fixture: ComponentFixture<ShotoretoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShotoretoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
