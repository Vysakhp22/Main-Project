import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductionComponent } from './view-production.component';

describe('ViewProductionComponent', () => {
  let component: ViewProductionComponent;
  let fixture: ComponentFixture<ViewProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
