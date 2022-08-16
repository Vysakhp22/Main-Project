import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentraljailChangePasswordComponent } from './centraljail-change-password.component';

describe('CentraljailChangePasswordComponent', () => {
  let component: CentraljailChangePasswordComponent;
  let fixture: ComponentFixture<CentraljailChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentraljailChangePasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentraljailChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
