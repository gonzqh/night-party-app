import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PunishmentsPage } from './punishments.page';

describe('PunishmentsPage', () => {
  let component: PunishmentsPage;
  let fixture: ComponentFixture<PunishmentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PunishmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
