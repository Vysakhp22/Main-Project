import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMyProfileComponent } from './company-my-profile.component';

describe('CompanyMyProfileComponent', () => {
  let component: CompanyMyProfileComponent;
  let fixture: ComponentFixture<CompanyMyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyMyProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyMyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
