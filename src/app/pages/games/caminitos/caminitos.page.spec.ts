import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaminitosPage } from './caminitos.page';

describe('CaminitosPage', () => {
  let component: CaminitosPage;
  let fixture: ComponentFixture<CaminitosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CaminitosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
