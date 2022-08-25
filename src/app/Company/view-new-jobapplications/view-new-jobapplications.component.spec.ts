import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNewJobapplicationsComponent } from './view-new-jobapplications.component';

describe('ViewNewJobapplicationsComponent', () => {
  let component: ViewNewJobapplicationsComponent;
  let fixture: ComponentFixture<ViewNewJobapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNewJobapplicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewNewJobapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
