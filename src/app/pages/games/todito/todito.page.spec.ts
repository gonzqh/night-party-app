import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToditoPage } from './todito.page';

describe('ToditoPage', () => {
  let component: ToditoPage;
  let fixture: ComponentFixture<ToditoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ToditoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
