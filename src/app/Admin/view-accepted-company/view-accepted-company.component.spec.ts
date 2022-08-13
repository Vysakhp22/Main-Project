import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAcceptedCompanyComponent } from './view-accepted-company.component';

describe('ViewAcceptedCompanyComponent', () => {
  let component: ViewAcceptedCompanyComponent;
  let fixture: ComponentFixture<ViewAcceptedCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAcceptedCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAcceptedCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
