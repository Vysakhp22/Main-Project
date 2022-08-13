import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNewCompanyComponent } from './view-new-company.component';

describe('ViewNewCompanyComponent', () => {
  let component: ViewNewCompanyComponent;
  let fixture: ComponentFixture<ViewNewCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNewCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewNewCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
