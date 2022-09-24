import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentraljailRegistrationComponent } from './centraljail-registration.component';

describe('CentraljailRegistrationComponent', () => {
  let component: CentraljailRegistrationComponent;
  let fixture: ComponentFixture<CentraljailRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentraljailRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentraljailRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
