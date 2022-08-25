import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRejectedJobapplicationsComponent } from './view-rejected-jobapplications.component';

describe('ViewRejectedJobapplicationsComponent', () => {
  let component: ViewRejectedJobapplicationsComponent;
  let fixture: ComponentFixture<ViewRejectedJobapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRejectedJobapplicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRejectedJobapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
