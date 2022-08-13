import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEditProfileComponent } from './company-edit-profile.component';

describe('CompanyEditProfileComponent', () => {
  let component: CompanyEditProfileComponent;
  let fixture: ComponentFixture<CompanyEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyEditProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
