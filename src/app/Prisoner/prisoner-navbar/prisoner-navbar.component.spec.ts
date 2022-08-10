import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrisonerNavbarComponent } from './prisoner-navbar.component';

describe('PrisonerNavbarComponent', () => {
  let component: PrisonerNavbarComponent;
  let fixture: ComponentFixture<PrisonerNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrisonerNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrisonerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
