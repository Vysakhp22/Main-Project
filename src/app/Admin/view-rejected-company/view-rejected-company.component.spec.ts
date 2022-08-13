import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRejectedCompanyComponent } from './view-rejected-company.component';

describe('ViewRejectedCompanyComponent', () => {
  let component: ViewRejectedCompanyComponent;
  let fixture: ComponentFixture<ViewRejectedCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRejectedCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRejectedCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
