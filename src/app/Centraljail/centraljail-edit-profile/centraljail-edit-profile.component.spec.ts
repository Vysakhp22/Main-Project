import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentraljailEditProfileComponent } from './centraljail-edit-profile.component';

describe('CentraljailEditProfileComponent', () => {
  let component: CentraljailEditProfileComponent;
  let fixture: ComponentFixture<CentraljailEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentraljailEditProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentraljailEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
