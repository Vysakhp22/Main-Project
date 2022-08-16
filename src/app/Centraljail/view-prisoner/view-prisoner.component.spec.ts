import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPrisonerComponent } from './view-prisoner.component';

describe('ViewPrisonerComponent', () => {
  let component: ViewPrisonerComponent;
  let fixture: ComponentFixture<ViewPrisonerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPrisonerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPrisonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
