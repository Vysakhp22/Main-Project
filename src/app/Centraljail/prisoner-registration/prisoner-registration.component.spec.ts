import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrisonerRegistrationComponent } from './prisoner-registration.component';

describe('PrisonerRegistrationComponent', () => {
  let component: PrisonerRegistrationComponent;
  let fixture: ComponentFixture<PrisonerRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrisonerRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrisonerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
