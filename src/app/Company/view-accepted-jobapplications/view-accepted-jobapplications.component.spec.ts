import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAcceptedJobapplicationsComponent } from './view-accepted-jobapplications.component';

describe('ViewAcceptedJobapplicationsComponent', () => {
  let component: ViewAcceptedJobapplicationsComponent;
  let fixture: ComponentFixture<ViewAcceptedJobapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAcceptedJobapplicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAcceptedJobapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
