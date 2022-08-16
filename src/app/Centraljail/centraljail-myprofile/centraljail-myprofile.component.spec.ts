import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentraljailMyprofileComponent } from './centraljail-myprofile.component';

describe('CentraljailMyprofileComponent', () => {
  let component: CentraljailMyprofileComponent;
  let fixture: ComponentFixture<CentraljailMyprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentraljailMyprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentraljailMyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
